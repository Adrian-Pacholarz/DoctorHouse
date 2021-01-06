using System;

namespace DoctorHouse.Controllers.Resources
{
    public class UserDetailsResource
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EMail { get; set; }
        public Int64 PhoneNumber { get; set; }
        public DateTime DateOfRegistration { get; set; }
        public int UserId { get; set; }
    }
}
