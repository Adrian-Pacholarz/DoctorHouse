using DoctorHouse.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly DoctorHouseDbContext context;

        public CustomerRepository(DoctorHouseDbContext context)
        {
            this.context = context;
        }

        public async Task<Customer> GetCustomer(int id)
        {
            return await context.Customers
                .Include(c => c.Appointments)
                    .ThenInclude(a => a.Company)
                .Include(c => c.Appointments)
                    .ThenInclude(a => a.Specialist)
                        .ThenInclude(s => s.Details)
                .Include(c => c.Details)
                .SingleOrDefaultAsync(c => c.Id == id);
        }
    }
}
