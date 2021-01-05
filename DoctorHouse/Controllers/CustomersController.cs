using AutoMapper;
using DoctorHouse.Controllers.Resources;
using DoctorHouse.Models;
using DoctorHouse.Persistance;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Controllers
{
    [Route("/api/users/customers")]
    public class CustomersController : Controller
    {
        private readonly DoctorHouseDbContext context;
        private readonly IMapper mapper;

        public CustomersController(DoctorHouseDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetCustomers()
        {
            var customers = await context.Customers.Include(c => c.Details).Include(c => c.Appointments).ToListAsync();
            var customersResources = mapper.Map<List<Customer>, List<SaveCustomerResource>>(customers);

            return Ok(customersResources);
        }

        [HttpPost]
        public async Task<IActionResult> CreateCustomer([FromBody] SaveCustomerResource customerResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var customer = mapper.Map<SaveCustomerResource, Customer>(customerResource);
            customer.Details.DateOfRegistration = DateTime.Now;

            context.Customers.Add(customer);
            await context.SaveChangesAsync();

            var result = mapper.Map<Customer, SaveCustomerResource>(customer);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCustomer(int id, [FromBody] SaveCustomerResource customerResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var customer = await context.Customers
                .Include(c => c.Appointments)
                .Include(c => c.Details)
                .SingleOrDefaultAsync(c => c.Id == id);

            if (customer == null)
            {
                return NotFound();
            }

            mapper.Map<SaveCustomerResource, Customer>(customerResource, customer);

            await context.SaveChangesAsync();
            var result = mapper.Map<Customer, SaveCustomerResource>(customer);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            var customer = await context.Customers
                .Include(c => c.Appointments)
                .Include(c => c.Details)
                .SingleOrDefaultAsync(c => c.Id == id);

            if (customer == null)
            {
                return NotFound();
            }

            context.Remove(customer);
            await context.SaveChangesAsync();

            return Ok(id);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCustomer(int id)
        {
            var customer = await context.Customers
                .Include(c => c.Appointments)
                    .ThenInclude(a => a.Company)
                .Include(c => c.Appointments)
                    .ThenInclude(a => a.Specialist)
                        .ThenInclude(s => s.Details)
                .Include(c => c.Details)
                .SingleOrDefaultAsync(c => c.Id == id);

            if (customer == null)
            {
                return NotFound();
            }

            var customerResource = mapper.Map<Customer, CustomerResource>(customer);
            return Ok(customerResource);

        }
    }
}
