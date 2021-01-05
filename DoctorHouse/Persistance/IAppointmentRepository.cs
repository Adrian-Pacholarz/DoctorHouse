using DoctorHouse.Models;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public interface IAppointmentRepository
    {
        Task<Appointment> GetAppointment(int id);
    }
}