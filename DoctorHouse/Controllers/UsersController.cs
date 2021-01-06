using AutoMapper;
using DoctorHouse.Controllers.Resources;
using DoctorHouse.Core.Models;
using DoctorHouse.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Controllers
{
    [Route("/api/users")]
    public class UsersController : Controller
    {
        private readonly IMapper mapper;
        private readonly IUserRepository repository;
        private readonly IUnitOfWork unitOfWork;

        public UsersController(IMapper mapper, IUserRepository repository, IUnitOfWork unitOfWork)
        {
            this.mapper = mapper;
            this.repository = repository;
            this.unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {

            var users = await repository.GetUsers();

            var userResources = mapper.Map<List<User>, List<UserResource>>(users.ToList());

            return Ok(userResources);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await repository.GetUser(id);

            if (user == null)
            {
                return NotFound();
            }

            var userResource = mapper.Map<User, UserResource>(user);
            return Ok(userResource);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await repository.GetUserToDelete(id);

            if (user == null)
            {
                return NotFound();
            }

            repository.Remove(user);
            await unitOfWork.CompleteAsync();

            return Ok(id);
        }
    }
}
