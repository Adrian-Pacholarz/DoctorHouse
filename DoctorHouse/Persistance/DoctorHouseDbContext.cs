using Microsoft.EntityFrameworkCore;


namespace DoctorHouse.Persistance
{
    public class DoctorHouseDbContext : DbContext 
    {
        public DoctorHouseDbContext(string connectionString)
        {

        }
    }
}
