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
            //Models to API resources
            CreateMap<Appointment, AppointmentResource>();
            CreateMap<Company, CompanyResource>();
            CreateMap<Customer, CustomerResource>();
            CreateMap<Specialist, SpecialistResource>();
            CreateMap<SpecialistCompanies, SpecialistCompaniesResource>();
            CreateMap<User, UserResource>();
            CreateMap<UserDetails, UserDetailsResource>();

            //API resources to models
            CreateMap<CustomerResource, Customer>()
                .ForMember(c => c.Username, opt => opt.MapFrom(cr => cr.Username))
                .ForMember(c => c.Password, opt => opt.MapFrom(cr => cr.Password))
                .ForMember(c => c.IsAdmin, opt => opt.MapFrom(cr => cr.IsAdmin))
                .ForMember(c => c.Address, opt => opt.MapFrom(cr => cr.Address))
                .ForMember(c => c.UserDetailsId, opt => opt.MapFrom(cr => cr.UserDetailsId));

            CreateMap<SpecialistResource, Specialist>()
                .ForMember(s => s.Username, opt => opt.MapFrom(sr => sr.Username))
                .ForMember(s => s.Password, opt => opt.MapFrom(sr => sr.Password))
                .ForMember(s => s.SpecialistType, opt => opt.MapFrom(sr => sr.SpecialistType))
                .ForMember(s => s.Area, opt => opt.MapFrom(sr => sr.Area))
                .ForMember(s => s.UserDetailsId, opt => opt.MapFrom(sr => sr.UserDetailsId));

            CreateMap<UserResource, User>()
                .ForMember(u => u.Username, opt => opt.MapFrom(ur => ur.Username))
                .ForMember(u => u.Password, opt => opt.MapFrom(ur => ur.Password))
                .ForMember(u => u.UserDetailsId, opt => opt.MapFrom(u => u.UserDetailsId))
                .ForMember(u => u.IsAdmin, opt => opt.MapFrom(ur => ur.IsAdmin));
        }
    }
}
