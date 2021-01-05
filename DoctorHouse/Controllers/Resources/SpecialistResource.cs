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
    public class SpecialistResource
    {
        public UserDetailsResource Details { get; set;}
        public string SpecialistType { get; set; }
        public int Area { get; set; }

        public ICollection<KeyValuePairResource> Companies { get; set; }

        public ICollection<AppointmentResource> Appointments { get; set; }

        public SpecialistResource()
        {
            Companies = new Collection<KeyValuePairResource>();
            Appointments = new Collection<AppointmentResource>();
        }
    }
}
