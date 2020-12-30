using Castle.MicroKernel.SubSystems.Conversion;
using DoctorHouse.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Controllers.Resources
{
    public class CompanyResource
    {
        public int Id { get; set; }

        [Required]
        [Range(10, 10)]
        public Int64 NIP { get; set; }

        [Required]
        public bool IsVerified { get; set; }

        [Required]
        [StringLength(30)]
        public string CompanyName { get; set; }

        [Required]
        [StringLength(255)]
        public string Address { get; set; }
        public byte Rating { get; set; }

        [Required]
        [StringLength(255)]
        public string Description { get; set; }

        [Required]
        [Range(9, 9)]
        public Int64 PhoneNumber { get; set; }

        [Required]
        public ICollection<int> Specialists { get; set; }
        public ICollection<int> Appointments { get; set; }

        public CompanyResource()
        {
            Specialists = new Collection<int>();
            Appointments = new Collection<int>();
        }
    }
}
