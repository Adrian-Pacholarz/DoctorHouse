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

        public void Add(Customer customer)
        {
            context.Customers.Add(customer);
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

        public async Task<IEnumerable<Customer>> GetCustomers()
        {
            return await context.Customers.Include(c => c.Details).Include(c => c.Appointments).ToListAsync();
        }

        public async Task<Customer> GetCustomerToDelete(int id)
        {
            return await context.Customers
                .Include(c => c.Appointments)
                .Include(c => c.Details)
                .SingleOrDefaultAsync(c => c.Id == id);
        }

        public void Remove(Customer customer)
        {
            context.Remove(customer);
        }
    }
}
