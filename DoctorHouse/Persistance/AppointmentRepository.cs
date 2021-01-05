using DoctorHouse.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private readonly DoctorHouseDbContext context;

        public AppointmentRepository(DoctorHouseDbContext context)
        {
            this.context = context;
        }

        public void Add(Appointment appointment)
        {
            context.Appointments.Add(appointment);
        }

        public async Task<Appointment> GetAppointment(int id)
        {
            return await context.Appointments
                .Include(a => a.Company)
                .Include(a => a.Specialist)
                    .ThenInclude(s => s.Details)
                .Include(a => a.Customer)
                    .ThenInclude(c => c.Details)
                .SingleOrDefaultAsync(c => c.Id == id);
        }

        public async Task<IEnumerable<Appointment>> GetAppointments()
        {
            return await context.Appointments.ToListAsync();
        }

        public async Task<Appointment> GetAppointmentToDelete(int id)
        {
            return await context.Appointments.FindAsync(id);
        }

        public async Task<List<int>> GetListOfCompaniesIds()
        {
            return await context.Companies.Select(c => c.Id).ToListAsync();
        }

        public async Task<List<int>> GetListOfCustomersIds()
        {
            return await context.Customers.Select(c => c.Id).ToListAsync();
        }

        public async Task<List<int>> GetListOfSpecialistsIds()
        {
            return await context.Specialists.Select(s => s.Id).ToListAsync();
        }

        public async Task<List<int>> GetListOfSpecialistsIds(int companyId)
        {
            return await context.SpecialistCompanies.Where(sc => sc.CompanyId == companyId).Select(s => s.SpecialistId).ToListAsync();
        }

        public void Remove(Appointment appointment)
        {
            context.Remove(appointment);
        }
    }
}
