using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DoctorHouseDbContext context;

        public UnitOfWork(DoctorHouseDbContext context)
        {
            this.context = context;
        }
        public async Task CompleteAsync()
        {
            await context.SaveChangesAsync();
        }
    }
}
