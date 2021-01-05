using DoctorHouse.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly DoctorHouseDbContext context;

        public CompanyRepository(DoctorHouseDbContext context)
        {
            this.context = context;
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
    }
}
