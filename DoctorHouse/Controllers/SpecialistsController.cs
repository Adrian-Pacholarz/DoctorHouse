using AutoMapper;
using DoctorHouse.Core.Models;
using DoctorHouse.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace DoctorHouse.Controllers.Resources
{
    [Route("/api/users/specialists")]
    public class SpecialistsController : Controller
    {
        private readonly IMapper mapper;
        private readonly ISpecialistRepository repository;
        private readonly IUnitOfWork unitOfWork;

        public SpecialistsController(IMapper mapper, ISpecialistRepository repository, IUnitOfWork unitOfWork)
        {
            this.mapper = mapper;
            this.repository = repository;
            this.unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetSpecialists()
        {
            var specialists = await repository.GetSpecialists();

            var specialistsResources = mapper.Map<List<Specialist>, List<SaveSpecialistResource>>(specialists.ToList());
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

            var companies = await repository.GetListOfCompaniesIds();

            foreach (var i in specialistResource.Companies)
            {
                if (!companies.Contains(i))
                {
                    return BadRequest("Wrong company code provided");
                }
            }

            var specialist = mapper.Map<SaveSpecialistResource, Specialist>(specialistResource);
            specialist.Details.DateOfRegistration = DateTime.Now;

            repository.Add(specialist);
            await unitOfWork.CompleteAsync();

            specialist = await repository.GetSpecialist(specialist.Id);

            var result = mapper.Map<Specialist, SpecialistResource>(specialist);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSpecialist(int id, [FromBody] UpdateSpecialistResource specialistResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var specialist = await repository.GetSpecialist(id);

            if (specialist == null)
            {
                return NotFound();
            }

            var companies = await repository.GetListOfCompaniesIds();

            foreach (var i in specialistResource.Companies)
            {
                if (!companies.Contains(i))
                {
                    return BadRequest("Wrong company code provided");
                }
            }

            mapper.Map<UpdateSpecialistResource, Specialist>(specialistResource, specialist);
            await unitOfWork.CompleteAsync();

            specialist = await repository.GetSpecialist(specialist.Id);

            var result = mapper.Map<Specialist, SpecialistResource>(specialist);

            return Ok(result);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpecialist(int id)
        {
            var specialist = await repository.GetSpecialistToDelete(id);

            if (specialist == null)
            {
                return NotFound();
            }

            repository.Remove(specialist);
            await unitOfWork.CompleteAsync();

            return Ok(id);

        }
    }
}
