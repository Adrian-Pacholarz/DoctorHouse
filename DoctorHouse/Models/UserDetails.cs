using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorHouse.Models
{
    public class UserDetails
    {
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar(30)")]
        public string SecondName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string EMail { get; set; }
        public Int64 PhoneNumber { get; set; }
        public DateTime DateOfRegistration { get; set; }

        public User User  { get; set; }
        public int UserId { get; set; }

    }
}
