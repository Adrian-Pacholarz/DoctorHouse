using DoctorHouse.Models;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public interface IUserRepository
    {
        Task<User> GetUser(int id);
    }
}