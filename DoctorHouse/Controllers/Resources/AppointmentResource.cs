using DoctorHouse.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Controllers.Resources
{
    public class AppointmentResource
    {
        public int Id { get; set; }

        [Required]
        public DateTime AppointmentDate { get; set; }

        [Required]
        public string Status { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(MAX)")]
        public string Description { get; set; }

        public int CustomerId { get; set; }

        public int SpecialistId { get; set; }

        public int CompanyId { get; set; }
    }
}
