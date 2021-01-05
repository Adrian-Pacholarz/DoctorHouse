using DoctorHouse.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public interface ICustomerRepository
    {
        Task<Customer> GetCustomer(int id);
        void Add(Customer customer);
        Task<IEnumerable<Customer>> GetCustomers();
        Task<Customer> GetCustomerToDelete(int id);
        void Remove(Customer customer);
    }
}