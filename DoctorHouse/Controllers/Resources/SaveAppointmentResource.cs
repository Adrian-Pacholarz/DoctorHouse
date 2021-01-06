using System;
using System.ComponentModel.DataAnnotations;


namespace DoctorHouse.Controllers.Resources
{
    public class SaveAppointmentResource
    {
        public int Id { get; set; }

        [Required]
        public DateTime AppointmentDate { get; set; }

        [Required]
        public string Status { get; set; }

        [Required]
        [StringLength(255)]
        public string Description { get; set; }

        public int CustomerId { get; set; }

        public int SpecialistId { get; set; }

        public int CompanyId { get; set; }
    }
}
