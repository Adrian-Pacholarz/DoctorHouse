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
            //DOMAIN TO API RESOURCES
            CreateMap<Appointment, AppointmentResource>();
            CreateMap<Company, CompanyResource>();
            CreateMap<Specialist, SpecialistResource>();
            CreateMap<SpecialistCompanies, SpecialistCompaniesResource>();
            CreateMap<User, UserResource>();
            CreateMap<UserDetails, UserDetailsResource>();

            //Customer
            CreateMap<Customer, CustomerResource>()
                .ForMember(cr => cr.Username, opt => opt.MapFrom(c => c.Username))
                .ForMember(cr => cr.Password, opt => opt.MapFrom(c => c.Password))
                .ForMember(cr => cr.IsAdmin, opt => opt.MapFrom(c => c.IsAdmin))
                .ForMember(cr => cr.Address, opt => opt.MapFrom(c => c.Address))
                .ForMember(cr => cr.DetailsId, opt => opt.MapFrom(c => c.DetailsId)); //one-to-one relationship

            //Specialist
            CreateMap<Specialist, SpecialistResource>()
            .ForMember(sr => sr.Username, opt => opt.MapFrom(s => s.Username))
            .ForMember(sr => sr.Password, opt => opt.MapFrom(s => s.Password))
            .ForMember(sr => sr.IsAdmin, opt => opt.MapFrom(s => s.IsAdmin))
            .ForMember(sr => sr.SpecialistType, opt => opt.MapFrom(s => s.SpecialistType))
            .ForMember(sr => sr.Area, opt => opt.MapFrom(s => s.Area))
            .ForMember(sr => sr.DetailsId, opt => opt.MapFrom(s => s.DetailsId)) //one-to-one relationship
            .ForMember(sr => sr.Companies, opt => opt.MapFrom(s => s.Companies.Select(sc => sc.CompanyId))); //many-to-many relationship



            //API RESOURCES TO DOMAIN
            //Customer
            CreateMap<CustomerResource, Customer>()
                .ForMember(c => c.Id, opt => opt.Ignore())
                .ForMember(c => c.Appointments, opt => opt.Ignore())
                .ForMember(c => c.DetailsId, opt => opt.Ignore())
                .ForMember(c => c.Username, opt => opt.MapFrom(cr => cr.Username))
                .ForMember(c => c.Password, opt => opt.MapFrom(cr => cr.Password))
                .ForMember(c => c.IsAdmin, opt => opt.MapFrom(cr => cr.IsAdmin))
                .ForMember(c => c.Address, opt => opt.MapFrom(cr => cr.Address))
                .ForMember(c => c.DetailsId, opt => opt.MapFrom(cr => cr.DetailsId)); //one-to-one relationship


            //Specialist
            CreateMap<SpecialistResource, Specialist>()
                .ForMember(s => s.Id, opt => opt.Ignore())
                .ForMember(s => s.DetailsId, opt => opt.Ignore())
                .ForMember(s => s.Appointments, opt => opt.Ignore())
                .ForMember(s => s.Companies, opt => opt.Ignore())
                .ForMember(s => s.Username, opt => opt.MapFrom(sr => sr.Username))
                .ForMember(s => s.Password, opt => opt.MapFrom(sr => sr.Password))
                .ForMember(s => s.IsAdmin, opt => opt.MapFrom(sr => sr.IsAdmin))
                .ForMember(s => s.SpecialistType, opt => opt.MapFrom(sr => sr.SpecialistType))
                .ForMember(s => s.Area, opt => opt.MapFrom(sr => sr.Area))
                .ForMember(s => s.DetailsId, opt => opt.MapFrom(sr => sr.DetailsId)) //one-to-one relationship
                .AfterMap((sr, s) =>
                {
                    //Remove companies
                    var removedCompanies = s.Companies.Where(c => !sr.Companies.Contains(c.CompanyId));

                    foreach (var c in removedCompanies)
                    {
                        s.Companies.Remove(c);
                    }

                    //Add new companies
                    var addedCompanies = sr.Companies.Where(id => !s.Companies.Any(c => c.CompanyId == id)).Select(id => new SpecialistCompanies { CompanyId = id});

                    foreach (var c in addedCompanies)
                    {
                        s.Companies.Add(c);
                    }

                }); //many-to-many relationship


            //User
            CreateMap<UserResource, User>()
                .ForMember(u => u.Id, opt => opt.Ignore())
                .ForMember(u => u.DetailsId, opt => opt.Ignore())
                .ForMember(u => u.Username, opt => opt.MapFrom(ur => ur.Username))
                .ForMember(u => u.Password, opt => opt.MapFrom(ur => ur.Password))
                .ForMember(u => u.DetailsId, opt => opt.MapFrom(u => u.DetailsId)) //one-to-one relationship
                .ForMember(u => u.IsAdmin, opt => opt.MapFrom(ur => ur.IsAdmin));
        }
    }
}
