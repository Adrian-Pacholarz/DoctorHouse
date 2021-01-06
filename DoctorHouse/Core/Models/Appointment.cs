using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorHouse.Core.Models
{
    public class Appointment
    {
        public int Id { get; set; }

        [Required]
        public DateTime AppointmentDate { get; set; }

        [Required]
        public string Status { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(MAX)")]
        public string Description { get; set; }

        public int? CustomerId { get; set; }

        public int? SpecialistId { get; set; }

        public int? CompanyId { get; set; }

        public Customer Customer { get; set; }

        public Specialist Specialist { get; set; }

        public Company Company { get; set; }
    }
}
