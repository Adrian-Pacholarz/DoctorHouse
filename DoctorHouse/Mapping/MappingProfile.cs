using AutoMapper;
using DoctorHouse.Controllers.Resources;
using DoctorHouse.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DoctorHouse.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserResource>();
            CreateMap<UserDetails, UserDetailsResource>();
            //CreateMap<Specialist, SpecialistResource>();
            //CreateMap<Customer, CustomerResource>();
        }
    }
}
