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
    }
}
