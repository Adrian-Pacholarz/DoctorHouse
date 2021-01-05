using Castle.MicroKernel.SubSystems.Conversion;
using DoctorHouse.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Controllers.Resources
{
    public class CustomerResource
    {
        public UserDetailsResource Details { get; set; }
        public string Address { get; set; }
        public ICollection<AppointmentResource> Appointments { get; set; }

        public CustomerResource()
        {
            Appointments = new Collection<AppointmentResource>();
        }
    }
}
