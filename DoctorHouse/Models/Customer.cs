using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorHouse.Models
{
    public class Customer : User
    {

        [Required]
        [Column(TypeName = "nvarchar(MAX)")]
        public string Address { get; set; }

    }
}
