using DoctorHouse.Models;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public interface ICustomerRepository
    {
        Task<Customer> GetCustomer(int id);
    }
}