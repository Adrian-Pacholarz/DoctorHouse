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
            CreateMap<UserDetails, UserDetailsResource>();
            CreateMap<Specialist, SpecialistResource>();
            CreateMap<Customer, CustomerResource>();


            CreateMap<Customer, CustomerResource>()
                .ForMember(c => c.Username, opt => opt.MapFrom(cr => cr.Username))
                .ForMember(c => c.Password, opt => opt.MapFrom(cr => cr.Password))
                .ForMember(c => c.IsAdmin, opt => opt.MapFrom(cr => cr.IsAdmin))
                .ForMember(c => c.Address, opt => opt.MapFrom(cr => cr.Address));

            CreateMap<Specialist, SpecialistResource>()
                .ForMember(s => s.Username, opt => opt.MapFrom(sr => sr.Username))
                .ForMember(s => s.Password, opt => opt.MapFrom(sr => sr.Password))
                .ForMember(s => s.Password, opt => opt.MapFrom(sr => sr.Password))
                .ForMember(s => s.SpecialistType, opt => opt.MapFrom(sr => sr.SpecialistType))
                .ForMember(s => s.Area, opt => opt.MapFrom(sr => sr.Area));
        }
    }
}
