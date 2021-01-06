using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace DoctorHouse.Controllers.Resources
{
    public class SaveCustomerResource : UserResource
    {
        [Required]
        [StringLength(255)]
        public string Address { get; set; }
        public ICollection<int> Appointments { get; set; }

        public SaveCustomerResource()
        {
            Appointments = new Collection<int>();
        }
    }
}
