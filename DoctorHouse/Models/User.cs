using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorHouse.Models
{
    public class User
    {
        public int Id { get; set; }

        [Column(TypeName = "varchar(20)")]
        public string Username { get; set; }

        [Column(TypeName = "varchar(20)")]
        public string Password { get; set; }
        public string UserRole { get; set; }
        public int UserDetailsId { get; set; }
    }
}
