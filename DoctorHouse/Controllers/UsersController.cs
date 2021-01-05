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
        private readonly IUserRepository repository;

        public UsersController(DoctorHouseDbContext context, IMapper mapper, IUserRepository repository)
        {
            this.context = context;
            this.mapper = mapper;
            this.repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {

            var users = await context.Users.Include(u => u.Details).ToListAsync();

            var userResources = mapper.Map<List<User>, List<UserResource>>(users);

            return Ok(userResources);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await repository.GetUser(id);

            if (user == null)
            {
                return NotFound();
            }

            var userResource = mapper.Map<User, UserResource>(user);
            return Ok(userResource);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await context.Users.Include(u => u.Details).SingleOrDefaultAsync(u => u.Id == id);

            if (user == null)
            {
                return NotFound();
            }

            context.Remove(user);
            await context.SaveChangesAsync();

            return Ok(id);
        }
    }
}
