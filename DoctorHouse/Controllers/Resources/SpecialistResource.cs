using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Controllers.Resources
{
    public class SpecialistResource : UserResource
    {
        public string SpecialistType { get; set; }
        public int? Area { get; set; }
        public ICollection<int> Companies { get; set; }
        public ICollection<int> Appointments { get; set; }

        public SpecialistResource()
        {
            Companies = new Collection<int>();
            Appointments = new Collection<int>();
        }

    }
}
