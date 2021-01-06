using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorHouse.Core.Models
{
    public class UserDetails
    {
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(20)")]
        public string FirstName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string LastName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string EMail { get; set; }

        [Required]
        public Int64 PhoneNumber { get; set; }

        [Required]
        public DateTime DateOfRegistration { get; set; }

        public User User  { get; set; }
        public int UserId { get; set; }

    }
}
