using System.Collections.Generic;
using System.Collections.ObjectModel;

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
