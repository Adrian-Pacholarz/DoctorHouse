using DoctorHouse.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public interface IAppointmentRepository
    {
        Task<Appointment> GetAppointment(int id);
        void Add(Appointment appointment);
        Task<IEnumerable<Appointment>> GetAppointments();
        Task<Appointment> GetAppointmentToDelete(int id);
        Task<List<int>> GetListOfCompaniesIds();
        Task<List<int>> GetListOfCustomersIds();
        Task<List<int>> GetListOfSpecialistsIds();
        Task<List<int>> GetListOfSpecialistsIds(int companyId);
        void Remove(Appointment appointment);
    }
}