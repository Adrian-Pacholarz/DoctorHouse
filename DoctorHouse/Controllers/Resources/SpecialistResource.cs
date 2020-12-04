using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Controllers.Resources
{
    public class SpecialistResource
    {
        public int Id { get; set; }
        public string SpecialistType { get; set; }
        public int? Area { get; set; }

    }
}
