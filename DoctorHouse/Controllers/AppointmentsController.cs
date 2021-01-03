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
    [Route("api/appointments")]
    public class AppointmentsController : Controller
    {
        private readonly DoctorHouseDbContext context;
        private readonly IMapper mapper;

        public AppointmentsController(DoctorHouseDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<AppointmentResource>> GetAppointments()
        {
            var appointments = await context.Appointments.ToListAsync();
            return mapper.Map<List<Appointment>, List<AppointmentResource>>(appointments);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAppointment(int id)
        {
            var appointment = await context.Appointments.FindAsync(id);

            if (appointment == null)
            {
                return NotFound();
            }

            var appointmentResource = mapper.Map<Appointment, AppointmentResource>(appointment);
            return Ok(appointmentResource);

        }

        [HttpPost]
        public async Task<IActionResult> CreateAppointment([FromBody] AppointmentResource appointmentResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var specialists = await context.Specialists.Select(s => s.Id).ToListAsync();
            var customers = await context.Customers.Select(c => c.Id).ToListAsync();
            var companies = await context.Companies.Select(c => c.Id).ToListAsync();

            if (!specialists.Contains(appointmentResource.SpecialistId) ||
                !customers.Contains(appointmentResource.CustomerId) ||
                !companies.Contains(appointmentResource.CompanyId))
            {
                return BadRequest("Wrong type of data provided");
            }

            var specialistsInCompany = await context.SpecialistCompanies.Where(sc => sc.CompanyId == appointmentResource.CompanyId).Select(s => s.SpecialistId).ToListAsync();
            if (!specialistsInCompany.Contains(appointmentResource.SpecialistId))
            {
                return BadRequest("Provided specialist doesn't belong to this company");
            }

            var appointment = mapper.Map<AppointmentResource, Appointment>(appointmentResource);

            context.Appointments.Add(appointment);
            await context.SaveChangesAsync();

            var result = mapper.Map<Appointment, AppointmentResource>(appointment);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAppointment(int id, [FromBody] AppointmentResource appointmentResource)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var appointment = await context.Appointments.FindAsync(id);

            if (appointment == null)
            {
                return NotFound();
            }

            var specialists = await context.Specialists.Select(s => s.Id).ToListAsync();
            var customers = await context.Customers.Select(c => c.Id).ToListAsync();
            var companies = await context.Companies.Select(c => c.Id).ToListAsync();

            if (!specialists.Contains(appointmentResource.SpecialistId) ||
                !customers.Contains(appointmentResource.CustomerId) ||
                !companies.Contains(appointmentResource.CompanyId))
            {
                return BadRequest("Wrong type of data provided");
            }

            var specialistsInCompany = await context.SpecialistCompanies.Where(sc => sc.CompanyId == appointmentResource.CompanyId).Select(s => s.SpecialistId).ToListAsync();
            if (!specialistsInCompany.Contains(appointmentResource.SpecialistId))
            {
                return BadRequest("Provided specialist doesn't belong to this company");
            }

            mapper.Map<AppointmentResource, Appointment>(appointmentResource, appointment);
            await context.SaveChangesAsync();
            var result = mapper.Map<Appointment, AppointmentResource>(appointment);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAppointment(int id)
        {
            var appointment = await context.Companies.FindAsync(id);

            if (appointment == null)
            {
                return NotFound();
            }

            context.Remove(appointment);
            await context.SaveChangesAsync();

            return Ok(id);
        }
    }
}
