using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorHouse.Core.Models
{
    public class Specialist : User
    {
        [Required]
        public string SpecialistType { get; set; }
        public int? Area { get; set; }

        [Required]
        public ICollection<SpecialistCompanies> Companies { get; set; }

        public ICollection<Appointment> Appointments { get; set; }

        public Specialist()
        {
            Companies = new Collection<SpecialistCompanies>();
            Appointments = new Collection<Appointment>();
        }
    }
}
