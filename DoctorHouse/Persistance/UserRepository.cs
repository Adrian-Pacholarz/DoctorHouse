using DoctorHouse.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DoctorHouse.Core;

namespace DoctorHouse.Persistance
{
    public class UserRepository : IUserRepository
    {
        private readonly DoctorHouseDbContext context;

        public UserRepository(DoctorHouseDbContext context)
        {
            this.context = context;
        }

        public void Add(User user)
        {
            context.Users.Add(user);
        }

        public async Task<User> GetUser(int id)
        {
            return await context.Users.Include(u => u.Details).SingleOrDefaultAsync(u => u.Id == id);
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            return await context.Users.Include(u => u.Details).ToListAsync();
        }

        public async Task<User> GetUserToDelete(int id)
        {
            return await context.Users.Include(u => u.Details).SingleOrDefaultAsync(u => u.Id == id);
        }

        public void Remove(User user)
        {
            context.Remove(user);
        }
    }
}
