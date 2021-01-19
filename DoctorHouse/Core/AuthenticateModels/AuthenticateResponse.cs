using DoctorHouse.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Core.AuthenticateModels
{
    public class AuthenticateResponse
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string UserRole { get; set; }
        public string Token { get; set; }


        public AuthenticateResponse(User user, string token)
        {
            Id = user.Id;
            FirstName = user.Details.FirstName;
            LastName = user.Details.LastName;
            Username = user.Username;
            UserRole = user.Discriminator;
            Token = token;
        }
    }
}
