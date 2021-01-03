using System;
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
        public CompaniesController(DoctorHouseDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<CompanyResource>> GetCompanies()
        {
            var companies = await context.Companies.Include(c => c.Specialists).Include(c => c.Appointments).ToListAsync();
            return mapper.Map<List<Company>, List<CompanyResource>>(companies);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompany(int id)
        {
            var company = await context.Companies.Include(c => c.Specialists).Include(c => c.Appointments).SingleOrDefaultAsync(c => c.Id == id);

            if (company == null)
            {
                return NotFound();
            }

            var companyResource = mapper.Map<Company, CompanyResource>(company);
            return Ok(companyResource);

        }

        [HttpPost]
        public async Task<IActionResult> CreateCompany([FromBody] CompanyResource companyResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var specialists = await context.Specialists.Select(s => s.Id).ToListAsync();
            var usersToCheck = companyResource.Specialists.ToList();

                foreach (var i in usersToCheck)
                {
                    if (!specialists.Contains(i))
                    {
                    return BadRequest("Wrong type of users provided");
                    }
                }

            var company = mapper.Map<CompanyResource, Company>(companyResource);

            context.Companies.Add(company);
            await context.SaveChangesAsync();

            var result = mapper.Map<Company, CompanyResource>(company);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCompany(int id, [FromBody] CompanyResource companyResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var company = await context.Companies.Include(c => c.Specialists).SingleOrDefaultAsync(c => c.Id == id);

            if (company == null)
            {
                return NotFound();
            }

            var specialists = await context.Specialists.Select(s => s.Id).ToListAsync();
            var usersToCheck = companyResource.Specialists.ToList();

            foreach (var i in usersToCheck)
            {
                if (!specialists.Contains(i))
                {
                    return BadRequest("Wrong type of users provided");
                }
            }

            mapper.Map<CompanyResource, Company>(companyResource, company);
            await context.SaveChangesAsync();
            var result = mapper.Map<Company, CompanyResource>(company);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompany(int id)
        {
            var company = await context.Companies.FindAsync(id);

            if(company == null)
            {
                return NotFound();
            }

            context.Remove(company);
            await context.SaveChangesAsync();

            return Ok(id);
        }
    }
}
