using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace DoctorHouse.Core.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "varchar(20)")]
        public string Username { get; set; }
        [Required]
        [Column(TypeName = "varchar(20)")]
        [JsonIgnore]
        public string Password { get; set; }
        [Required]
        public string Discriminator { get; set; }
        public bool IsAdmin { get; set; }
        public UserDetails Details { get; set; }
    }
}
