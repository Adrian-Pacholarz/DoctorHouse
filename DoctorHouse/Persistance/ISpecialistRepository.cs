using DoctorHouse.Models;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public interface ISpecialistRepository
    {
        Task<Specialist> GetSpecialist(int id);
    }
}