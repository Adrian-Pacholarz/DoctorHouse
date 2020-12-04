using System.ComponentModel.DataAnnotations;

namespace DoctorHouse.Models
{
    public class Specialist
    {
        public int Id { get; set; }

        [Required]
        public string SpecialistType { get; set; }
        public int? Area { get; set; }

    }
}
