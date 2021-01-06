using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DoctorHouse.Controllers.Resources;
using DoctorHouse.Core.Models;
using AutoMapper;
using DoctorHouse.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;

namespace DoctorHouse.Controllers
{
    [Route("api/appointments")]
    public class AppointmentsController : Controller
    {
        private readonly IMapper mapper;
        private readonly IAppointmentRepository repository;
        private readonly IUnitOfWork unitOfWork;

        public AppointmentsController(IMapper mapper, IAppointmentRepository repository, IUnitOfWork unitOfWork)
        {
            this.mapper = mapper;
            this.repository = repository;
            this.unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IEnumerable<SaveAppointmentResource>> GetAppointments()
        {
            var appointments = await repository.GetAppointments();
            return mapper.Map<List<Appointment>, List<SaveAppointmentResource>>(appointments.ToList());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAppointment(int id)
        {
            var appointment = await repository.GetAppointment(id);

            if (appointment == null)
            {
                return NotFound();
            }

            var appointmentResource = mapper.Map<Appointment, AppointmentResource>(appointment);
            return Ok(appointmentResource);

        }

        [HttpPost]
        public async Task<IActionResult> CreateAppointment([FromBody] SaveAppointmentResource appointmentResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var specialists = await repository.GetListOfSpecialistsIds();
            var customers = await repository.GetListOfCustomersIds();
            var companies = await repository.GetListOfCompaniesIds();

            if (!specialists.Contains(appointmentResource.SpecialistId) ||
                !customers.Contains(appointmentResource.CustomerId) ||
                !companies.Contains(appointmentResource.CompanyId))
            {
                return BadRequest("Wrong type of data provided");
            }
          
            var specialistsInCompany = await repository.GetListOfSpecialistsIds(appointmentResource.CompanyId);
            if (!specialistsInCompany.Contains(appointmentResource.SpecialistId))
            {
                return BadRequest("Provided specialist doesn't belong to this company");
            }

            var appointment = mapper.Map<SaveAppointmentResource, Appointment>(appointmentResource);

            repository.Add(appointment);
            await unitOfWork.CompleteAsync();

            appointment = await repository.GetAppointment(appointment.Id);

            var result = mapper.Map<Appointment, AppointmentResource>(appointment);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAppointment(int id, [FromBody] SaveAppointmentResource appointmentResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var appointment = await repository.GetAppointment(id);

            if (appointment == null)
            {
                return NotFound();
            }

            var specialists = await repository.GetListOfSpecialistsIds();
            var customers = await repository.GetListOfCustomersIds();
            var companies = await repository.GetListOfCompaniesIds();

            if (!specialists.Contains(appointmentResource.SpecialistId) ||
                !customers.Contains(appointmentResource.CustomerId) ||
                !companies.Contains(appointmentResource.CompanyId))
            {
                return BadRequest("Wrong type of data provided");
            }

            var specialistsInCompany = await repository.GetListOfSpecialistsIds(appointmentResource.CompanyId);
            if (!specialistsInCompany.Contains(appointmentResource.SpecialistId))
            {
                return BadRequest("Provided specialist doesn't belong to this company");
            }

            mapper.Map<SaveAppointmentResource, Appointment>(appointmentResource, appointment);
            await unitOfWork.CompleteAsync();

            appointment = await repository.GetAppointment(appointment.Id);

            var result = mapper.Map<Appointment, AppointmentResource>(appointment);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppointment(int id)
        {
            var appointment = await repository.GetAppointmentToDelete(id);

            if (appointment == null)
            {
                return NotFound();
            }

            repository.Remove(appointment);
            await unitOfWork.CompleteAsync();

            return Ok(id);
        }
    }
}
