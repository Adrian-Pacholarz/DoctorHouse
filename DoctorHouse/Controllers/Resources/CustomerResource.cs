using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Controllers.Resources
{
    public class CustomerResource : UserResource
    {
        public string Address { get; set; }
    }
}
