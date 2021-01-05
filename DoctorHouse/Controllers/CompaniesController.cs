﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DoctorHouse.Controllers.Resources;
using DoctorHouse.Models;
using AutoMapper;
using DoctorHouse.Persistance;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;


namespace DoctorHouse.Controllers
{
    [Route("api/companies")]
    public class CompaniesController : Controller
    {
        private readonly DoctorHouseDbContext context;
        private readonly IMapper mapper;
        private readonly ICompanyRepository repository;

        public CompaniesController(DoctorHouseDbContext context, IMapper mapper, ICompanyRepository repository)
        {
            this.context = context;
            this.mapper = mapper;
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<SaveCompanyResource>> GetCompanies()
        {
            var companies = await repository.GetCompanies();
            return mapper.Map<List<Company>, List<SaveCompanyResource>>(companies.ToList());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompany(int id)
        {
            var company = await repository.GetCompany(id);

            if (company == null)
            {
                return NotFound();
            }

            var companyResource = mapper.Map<Company, CompanyResource>(company);
            return Ok(companyResource);

        }

        [HttpPost]
        public async Task<IActionResult> CreateCompany([FromBody] SaveCompanyResource companyResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var specialists = await repository.GetListOfSpecialistsIds();
            var usersToCheck = companyResource.Specialists.ToList();

                foreach (var i in usersToCheck)
                {
                    if (!specialists.Contains(i))
                    {
                    return BadRequest("Wrong type of users provided");
                    }
                }

            var company = mapper.Map<SaveCompanyResource, Company>(companyResource);

            repository.Add(company);
            await context.SaveChangesAsync();

            company = await repository.GetCompany(company.Id);

            var result = mapper.Map<Company, CompanyResource>(company);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCompany(int id, [FromBody] SaveCompanyResource companyResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var company = await repository.GetCompany(id);

            if (company == null)
            {
                return NotFound();
            }

            var specialists = await repository.GetListOfSpecialistsIds();
            var usersToCheck = companyResource.Specialists.ToList();

            foreach (var i in usersToCheck)
            {
                if (!specialists.Contains(i))
                {
                    return BadRequest("Wrong type of users provided");
                }
            }

            mapper.Map<SaveCompanyResource, Company>(companyResource, company);
            await context.SaveChangesAsync();
            var result = mapper.Map<Company, CompanyResource>(company);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompany(int id)
        {
            var company = await repository.GetCompanyToDelete(id);

            if(company == null)
            {
                return NotFound();
            }

            repository.Remove(company);
            await context.SaveChangesAsync();

            return Ok(id);
        }
    }
}
