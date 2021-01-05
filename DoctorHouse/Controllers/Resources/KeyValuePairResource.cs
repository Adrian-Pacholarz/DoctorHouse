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
    public class KeyValuePairResource
    {
        public int Id { get; set; }

        public string FullName { get; set; }

        public Int64 PhoneNumber { get; set; }
    }
}
