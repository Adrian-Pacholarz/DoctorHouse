namespace DoctorHouse.Models
{
    public class SpecialistCompanies
    {
        public int SpecialistId { get; set; }
        public int CompanyId { get; set; }
        public Specialist Specialist { get; set; }
        public Company Company { get; set; }

    }

}
