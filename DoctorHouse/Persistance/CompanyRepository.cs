using DoctorHouse.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DoctorHouse.Core;

namespace DoctorHouse.Persistance
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly DoctorHouseDbContext context;

        public CompanyRepository(DoctorHouseDbContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Company>> GetCompanies()
        {
            return await context.Companies
                .Include(c => c.Specialists)
                .Include(c => c.Appointments).ToListAsync();

        }
        public async Task<Company> GetCompanyToDelete(int id)
        {
            return await context.Companies
                                .Include(c => c.Appointments)
                                .SingleOrDefaultAsync(c => c.Id == id);
        }
        public async Task<Company> GetCompany(int id)
        {
            return await context.Companies
                .Include(c => c.Specialists)
                    .ThenInclude(cs => cs.Specialist)
                        .ThenInclude(s => s.Details)
                .Include(c => c.Appointments)
                    .ThenInclude(a => a.Customer)
                        .ThenInclude(c => c.Details)
                .SingleOrDefaultAsync(c => c.Id == id);
        }

        public async Task<List<int>> GetListOfSpecialistsIds()
        {
            return await context.Specialists.Select(s => s.Id).ToListAsync();
        }

        public void Add(Company company)
        {
            context.Companies.Add(company);
        }

        public void Remove(Company company)
        {
            context.Remove(company);
        }
    }
}
