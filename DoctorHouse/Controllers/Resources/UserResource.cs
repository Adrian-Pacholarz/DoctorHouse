using DoctorHouse.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Controllers.Resources
{
    public class UserResource
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string UserRole { get; set; }
        public UserDetailsResource UserDetails { get; set; }
    }
}
