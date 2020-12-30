using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Controllers.Resources
{
    public class CustomerResource : UserResource
    {
        [Required]
        [StringLength(255)]
        public string Address { get; set; }
        public ICollection<int> Appointments { get; set; }

        public CustomerResource()
        {
            Appointments = new Collection<int>();
        }
    }
}
