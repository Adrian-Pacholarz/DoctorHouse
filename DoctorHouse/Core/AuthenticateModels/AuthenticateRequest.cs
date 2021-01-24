using System.ComponentModel.DataAnnotations;

namespace DoctorHouse.Core.AuthenticateModels
{
    public class AuthenticateRequest
    {
        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
