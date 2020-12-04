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
    public class UsersController : Controller
    {
        private readonly DoctorHouseDbContext context;

        public UsersController(DoctorHouseDbContext context)
        {
            this.context = context;
        }

        [HttpGet("/api/users")]
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await context.Users.ToListAsync();
        }
    }
}
