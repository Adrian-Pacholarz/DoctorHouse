using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace DoctorHouse.Controllers.Resources
{
    public class UpdateCustomerResource : UpdateUserResource
    {
        [Required]
        [StringLength(255)]
        public string Address { get; set; }
        public ICollection<int> Appointments { get; set; }

        public UpdateCustomerResource()
        {
            Appointments = new Collection<int>();
        }
    }
}
