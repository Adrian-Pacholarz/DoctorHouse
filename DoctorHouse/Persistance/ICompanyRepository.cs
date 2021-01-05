using DoctorHouse.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public interface ICompanyRepository
    {
        void Add(Company company);
        Task<IEnumerable<Company>> GetCompanies();
        Task<Company> GetCompany(int id);
        Task<Company> GetCompanyToDelete(int id);
        Task<List<int>> GetListOfSpecialistsIds();
        void Remove(Company company);
    }
}