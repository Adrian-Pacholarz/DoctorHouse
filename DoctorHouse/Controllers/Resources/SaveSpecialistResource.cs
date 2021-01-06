using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace DoctorHouse.Controllers.Resources
{
    public class SaveSpecialistResource : UserResource
    {
        [Required]
        [StringLength(30)]
        public string SpecialistType { get; set; }


        [Range(1, 30)]
        public int Area { get; set; }

        [Required]
        public ICollection<int> Companies { get; set; }
        public ICollection<int> Appointments { get; set; }

        public SaveSpecialistResource()
        {
            Companies = new Collection<int>();
            Appointments = new Collection<int>();
        }

    }
}
