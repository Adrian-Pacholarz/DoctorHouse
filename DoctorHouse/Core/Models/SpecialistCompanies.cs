using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace DoctorHouse.Core.Models
{
    public class SpecialistCompanies
    {
        public int SpecialistId { get; set; }
        public int CompanyId { get; set; }
        public Specialist Specialist { get; set; }
        public Company Company { get; set; }
    }

}
