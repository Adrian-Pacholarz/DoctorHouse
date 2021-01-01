using AutoMapper;
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

        public SpecialistsController(DoctorHouseDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetSpecialists()
        {
            var specialists = await context.Specialists
                .Include(s => s.Details)
                .Include(s => s.Appointments)
                .Include(s => s.Companies)
                .ToListAsync();

            var specialistsResources = mapper.Map<List<Specialist>, List<SpecialistResource>>(specialists);
            return Ok(specialistsResources);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSpecialist(int id)
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

            var specialistResource = mapper.Map<Specialist, SpecialistResource>(specialist);

            return Ok(specialistResource);
        }


        [HttpPost]
        public async Task<IActionResult> CreateSpecialist([FromBody] SpecialistResource specialistResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var specialist = mapper.Map<SpecialistResource, Specialist>(specialistResource);
            context.Add(specialist);
            await context.SaveChangesAsync();

            var result = mapper.Map<Specialist, SpecialistResource>(specialist);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSpecialist(int id, [FromBody] SpecialistResource specialistResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var specialist = await context.Specialists
                .Include(s => s.Details)
                .Include(s => s.Appointments)
                .Include(s => s.Companies)
                .SingleOrDefaultAsync(s => s.Id == id);

            if (specialist == null)
            {
                return NotFound();
            }

            mapper.Map<SpecialistResource, Specialist>(specialistResource, specialist);
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
