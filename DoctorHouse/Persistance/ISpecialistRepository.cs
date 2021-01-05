using DoctorHouse.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public interface ISpecialistRepository
    {
        Task<Specialist> GetSpecialist(int id);
        void Add(Specialist specialist);
        Task<IEnumerable<Specialist>> GetSpecialists();
        Task<Specialist> GetSpecialistToDelete(int id);
        Task<List<int>> GetListOfCompaniesIds();
        void Remove(Specialist specialist);
    }
}