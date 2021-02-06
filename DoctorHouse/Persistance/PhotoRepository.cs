using DoctorHouse.Core;
using DoctorHouse.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Persistance
{
    public class PhotoRepository : IPhotoRepository
    {
        private readonly DoctorHouseDbContext context;

        public PhotoRepository(DoctorHouseDbContext context)
        {
            this.context = context;
        }
        public async Task<IEnumerable<Photo>> GetPhotos(int userId)
        {
            return await context.Photos
                .Where(p => p.UserId == userId)
                .ToListAsync();
        }
    }
}
