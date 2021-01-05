using DoctorHouse.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public class SpecialistRepository : ISpecialistRepository
    {
        private readonly DoctorHouseDbContext context;

        public SpecialistRepository(DoctorHouseDbContext context)
        {
            this.context = context;
        }

        public void Add(Specialist specialist)
        {
            context.Specialists.Add(specialist);
        }

        public async Task<List<int>> GetListOfCompaniesIds()
        {
            return await context.Companies.Select(s => s.Id).ToListAsync();
        }

        public async Task<Specialist> GetSpecialist(int id)
        {
            return await context.Specialists
                .Include(s => s.Details)
                .Include(c => c.Appointments)
                    .ThenInclude(a => a.Customer)
                        .ThenInclude(c => c.Details)
                .Include(s => s.Companies)
                    .ThenInclude(sc => sc.Company)
                .SingleOrDefaultAsync(s => s.Id == id);
        }

        public async Task<IEnumerable<Specialist>> GetSpecialists()
        {
            return await context.Specialists
                .Include(s => s.Details)
                .Include(s => s.Appointments)
                .Include(s => s.Companies)
                .ToListAsync();
        }

        public async Task<Specialist> GetSpecialistToDelete(int id)
        {
            return await context.Specialists
                .Include(s => s.Details)
                .Include(s => s.Appointments)
                .Include(s => s.Companies)
                .SingleOrDefaultAsync(s => s.Id == id);
        }

        public void Remove(Specialist specialist)
        {
            context.Remove(specialist);
        }
    }
}
