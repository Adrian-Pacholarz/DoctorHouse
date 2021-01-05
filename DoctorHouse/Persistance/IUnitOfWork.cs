using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}
