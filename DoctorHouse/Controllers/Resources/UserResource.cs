using System.ComponentModel.DataAnnotations;

namespace DoctorHouse.Controllers.Resources
{
    public class UserResource
    {
        public int Id { get; set; }

        [Required]
        [StringLength(20)]
        public string Username { get; set; }

        [Required]
        [StringLength(20)]
        public string Password { get; set; }

        [Required]
        public bool IsAdmin { get; set; }

        public SaveUserDetailsResource Details { get; set; }
    }
}
