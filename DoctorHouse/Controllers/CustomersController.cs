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
        public async Task<IEnumerable<CustomerResource>> GetCustomers()
        {
            var customers = await context.Customers.ToListAsync();
            return mapper.Map<List<Customer>, List<CustomerResource>>(customers);
        }

        [HttpPost]
        public async Task<IActionResult> CreateCustomer([FromBody] CustomerResource customerResource)
        {
            var customer = mapper.Map<CustomerResource, Customer>(customerResource);

            context.Customers.Add(customer);
            await context.SaveChangesAsync();

            var result = mapper.Map<Customer, CustomerResource>(customer);

            return Ok(result);
        }
    }
}
