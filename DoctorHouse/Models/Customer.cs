using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorHouse.Models
{
    [Table("Customers")]
    public class Customer : User
    {

        [Required]
        [Column(TypeName = "nvarchar(MAX)")]
        public string Address { get; set; }

        public ICollection<Appointment> Appointments { get; set; }

    }
}
