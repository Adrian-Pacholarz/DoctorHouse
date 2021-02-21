using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Controllers.Resources
{
    public class UpdateUserResource
    {
        public int Id { get; set; }

        [StringLength(20)]
        public string Username { get; set; }

        [StringLength(20)]
        public string Password { get; set; }

        public bool IsAdmin { get; set; }

        public SaveUserDetailsResource Details { get; set; }
    }
}
