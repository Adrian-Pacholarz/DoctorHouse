using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using DoctorHouse.Controllers.Resources;
using DoctorHouse.Core;
using DoctorHouse.Core.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DoctorHouse.Controllers
{
    [Route("/api/users/{userId}/photos")]
    public class PhotosController : Controller
    {
        private readonly int MAX_BYTES = 2 * 1024 * 1024;
        private readonly string[] ACCEPTED_FILE_TYPES = new[] {".jpg", ".jpeg", ".png" };
        private readonly IWebHostEnvironment host;
        private readonly IUserRepository repository;
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;

        public PhotosController(IWebHostEnvironment host, IUserRepository repository, IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.host = host;
            this.repository = repository;
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }
        [HttpPost]
        public async Task<IActionResult> Upload(int userId, IFormFile file)
        {
            var user = await repository.GetUser(userId);
            if (user == null)
                return NotFound("User not found");

            if (file == null) return BadRequest("Null file");
            if (file.Length == 0) return BadRequest("Empty file");
            if (file.Length > MAX_BYTES) return BadRequest("Maximum file size exceeded");
            if (!ACCEPTED_FILE_TYPES.Any(s => s == Path.GetExtension(file.FileName))) return BadRequest("Invalid file type");

            var uploadsFolderPath = Path.Combine(host.WebRootPath, "uploads");
            if(!Directory.Exists(uploadsFolderPath))
            {
                Directory.CreateDirectory(uploadsFolderPath);
            }

            var fileName = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
            var filePath = Path.Combine(uploadsFolderPath, fileName);

            using(var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            var photo = new Photo { FileName = fileName };
            user.Photos.Add(photo);
            await unitOfWork.CompleteAsync();

            return Ok(mapper.Map<Photo, PhotoResource>(photo));
        }
    }
}
