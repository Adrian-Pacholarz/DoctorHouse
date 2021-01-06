using System.Collections.Generic;
using System.Collections.ObjectModel;


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
