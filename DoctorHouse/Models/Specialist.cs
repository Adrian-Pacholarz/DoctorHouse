using System.ComponentModel.DataAnnotations;

namespace DoctorHouse.Models
{
    public class Specialist : User
    {
        [Required]
        public string SpecialistType { get; set; }
        public int? Area { get; set; }

    }
}
