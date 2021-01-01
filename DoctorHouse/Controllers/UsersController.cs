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
    [Route("/api/users")]
    public class UsersController : Controller
    {
        private readonly DoctorHouseDbContext context;
        private readonly IMapper mapper;

        public UsersController(DoctorHouseDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IEnumerable<UserResource>> GetUsers()
        {

            var users = await context.Users.Include(u => u.Details).ToListAsync();

            return mapper.Map<List<User>, List<UserResource>>(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await context.Users.Include(u => u.Details).SingleOrDefaultAsync(u => u.Id == id);

            if (user == null)
            {
                return NotFound();
            }

            var userResource = mapper.Map<User, UserResource>(user);
            return Ok(userResource);
        }
    }
}
