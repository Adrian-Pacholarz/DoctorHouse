using DoctorHouse.Models;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public interface ICompanyRepository
    {
        Task<Company> GetCompany(int id);
    }
}