using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace DoctorHouse.Controllers.Resources
{
    public class CompanyResource
    {
        public int Id { get; set; }

        public Int64 NIP { get; set; }

        public bool IsVerified { get; set; }

        public string CompanyName { get; set; }

        public string Address { get; set; }

        public byte Rating { get; set; }

        public string Description { get; set; }

        [Required]
        public Int64 PhoneNumber { get; set; }

        [Required]
        public ICollection<KeyValuePairResource> Specialists { get; set; }

        public ICollection<AppointmentResource> Appointments { get; set; }

        public CompanyResource()
        {
            Specialists = new Collection<KeyValuePairResource>();
            Appointments = new Collection<AppointmentResource>();
        }
    }

}
