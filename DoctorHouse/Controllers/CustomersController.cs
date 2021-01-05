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
        private readonly ICustomerRepository repository;

        public CustomersController(DoctorHouseDbContext context, IMapper mapper, ICustomerRepository repository)
        {
            this.context = context;
            this.mapper = mapper;
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetCustomers()
        {
            var customers = await repository.GetCustomers();
            var customersResources = mapper.Map<List<Customer>, List<SaveCustomerResource>>(customers.ToList());

            return Ok(customersResources);
        }

        [HttpPost]
        public async Task<IActionResult> CreateCustomer([FromBody] SaveCustomerResource customerResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var customer = mapper.Map<SaveCustomerResource, Customer>(customerResource);
            customer.Details.DateOfRegistration = DateTime.Now;

            repository.Add(customer);
            await context.SaveChangesAsync();

            customer = await repository.GetCustomer(customer.Id);

            var result = mapper.Map<Customer, CustomerResource>(customer);

            return Ok(result);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCustomer(int id, [FromBody] SaveCustomerResource customerResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var customer = await repository.GetCustomer(id);

            if (customer == null)
            {
                return NotFound();
            }

            mapper.Map<SaveCustomerResource, Customer>(customerResource, customer);

            await context.SaveChangesAsync();
            var result = mapper.Map<Customer, CustomerResource>(customer);

            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            var customer = await repository.GetCustomerToDelete(id);

            if (customer == null)
            {
                return NotFound();
            }

            repository.Remove(customer);
            await context.SaveChangesAsync();

            return Ok(id);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCustomer(int id)
        {
            var customer = await repository.GetCustomer(id);

            if (customer == null)
            {
                return NotFound();
            }

            var customerResource = mapper.Map<Customer, CustomerResource>(customer);
            return Ok(customerResource);

        }
    }
}
