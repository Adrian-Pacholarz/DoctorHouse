using System;

namespace DoctorHouse.Controllers.Resources
{
    public class AppointmentResource
    {
        public int Id { get; set; }

        public DateTime AppointmentDate { get; set; }

        public string Status { get; set; }

        public string Description { get; set; }

        public KeyValuePairResource Customer { get; set; }

        public KeyValuePairResource Specialist { get; set; }

        public KeyValuePairResource Company { get; set; }
    }
}
