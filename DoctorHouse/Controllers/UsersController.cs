using AutoMapper;
using DoctorHouse.Controllers.Resources;
using DoctorHouse.Core.Models;
using DoctorHouse.Core;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using DoctorHouse.Core.AuthenticateModels;
using System.Text;
using DoctorHouse.ApiHelpers;

namespace DoctorHouse.Controllers
{
    [Route("/api/users")]
    public class UsersController : Controller
    {
        private readonly AppSettings appSettings;
        private readonly IMapper mapper;
        private readonly IUserRepository repository;
        private readonly IUnitOfWork unitOfWork;

        public UsersController(IOptions<AppSettings> appSettings, IMapper mapper, IUserRepository repository, IUnitOfWork unitOfWork)
        {
            this.appSettings = appSettings.Value;
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
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateRequest model)
        {
            var allUsers = await repository.GetUsers();
            var user = allUsers.SingleOrDefault(x => x.Username == model.Username && x.Password == model.Password);

            // return bad request if user not found
            if (user == null)
            {
                return BadRequest(new { message = "Username or password is incorrect" });
            }

            // authentication successful so generate jwt token
            var token = generateJwtToken(user);

            var response = new AuthenticateResponse(user, token);

            return Ok(response);
        }

        private string generateJwtToken(User user)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
