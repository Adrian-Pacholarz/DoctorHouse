using DoctorHouse.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public class UserRepository : IUserRepository
    {
        private readonly DoctorHouseDbContext context;

        public UserRepository(DoctorHouseDbContext context)
        {
            this.context = context;
        }

        public async Task<User> GetUser(int id)
        {
            return await context.Users.Include(u => u.Details).SingleOrDefaultAsync(u => u.Id == id);
        }
    }
}
