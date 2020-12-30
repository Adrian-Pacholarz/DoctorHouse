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
        public async Task<IEnumerable<SpecialistResource>> GetSpecialists()
        {
            var specialists = await context.Specialists.ToListAsync();

            return mapper.Map<List<Specialist>, List<SpecialistResource>>(specialists);
        }

        [HttpPost]
        public IActionResult CreateSpecialist([FromBody] SpecialistResource specialistResource)
        {
            var specialist = mapper.Map<SpecialistResource, Specialist>(specialistResource);
            return Ok(specialist);
        }
    }
}
