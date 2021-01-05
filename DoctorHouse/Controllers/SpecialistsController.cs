﻿using AutoMapper;
using DoctorHouse.Models;
using DoctorHouse.Persistance;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Controllers.Resources
{
    [Route("/api/users/specialists")]
    public class SpecialistsController : Controller
    {
        private readonly DoctorHouseDbContext context;
        private readonly IMapper mapper;
        private readonly ISpecialistRepository repository;

        public SpecialistsController(DoctorHouseDbContext context, IMapper mapper, ISpecialistRepository repository)
        {
            this.context = context;
            this.mapper = mapper;
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetSpecialists()
        {
            var specialists = await context.Specialists
                .Include(s => s.Details)
                .Include(s => s.Appointments)
                .Include(s => s.Companies)
                .ToListAsync();

            var specialistsResources = mapper.Map<List<Specialist>, List<SaveSpecialistResource>>(specialists);
            return Ok(specialistsResources);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSpecialist(int id)
        {
            var specialist = await repository.GetSpecialist(id);

            if (specialist == null)
            {
                return NotFound();
            }

            var specialistResource = mapper.Map<Specialist, SpecialistResource>(specialist);

            return Ok(specialistResource);
        }


        [HttpPost]
        public async Task<IActionResult> CreateSpecialist([FromBody] SaveSpecialistResource specialistResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var companies = await context.Companies.Select(s => s.Id).ToListAsync();

            foreach (var i in specialistResource.Companies)
            {
                if (!companies.Contains(i))
                {
                    return BadRequest("Wrong company code provided");
                }
            }

            var specialist = mapper.Map<SaveSpecialistResource, Specialist>(specialistResource);
            specialist.Details.DateOfRegistration = DateTime.Now;

            context.Add(specialist);
            await context.SaveChangesAsync();

            specialist = await repository.GetSpecialist(specialist.Id);

            var result = mapper.Map<Specialist, SpecialistResource>(specialist);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSpecialist(int id, [FromBody] SaveSpecialistResource specialistResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var specialist = await repository.GetSpecialist(id);

            if (specialist == null)
            {
                return NotFound();
            }

            var companies = await context.Companies.Select(s => s.Id).ToListAsync();

            foreach (var i in specialistResource.Companies)
            {
                if (!companies.Contains(i))
                {
                    return BadRequest("Wrong company code provided");
                }
            }

            mapper.Map<SaveSpecialistResource, Specialist>(specialistResource, specialist);
            await context.SaveChangesAsync();

            var result = mapper.Map<Specialist, SpecialistResource>(specialist);

            return Ok(result);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpecialist(int id)
        {
            var specialist = await context.Specialists
                .Include(s => s.Details)
                .Include(s => s.Appointments)
                .Include(s => s.Companies)
                .SingleOrDefaultAsync(s => s.Id == id);

            if (specialist == null)
            {
                return NotFound();
            }

            context.Remove(specialist);
            await context.SaveChangesAsync();

            return Ok(id);

        }
    }
}
