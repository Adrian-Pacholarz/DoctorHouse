using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorHouse.Models
{
    public class Customer
    {
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string Address { get; set; }

    }
}
