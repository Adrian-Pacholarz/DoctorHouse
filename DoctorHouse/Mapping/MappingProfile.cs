﻿using AutoMapper;
using DoctorHouse.Controllers.Resources;
using DoctorHouse.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.JsonPatch.Operations;

namespace DoctorHouse.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //DOMAIN TO API RESOURCES
            CreateMap<UserDetails, UserDetailsResource>();
            CreateMap<UserDetails, SaveUserDetailsResource>();
            CreateMap<Photo, PhotoResource>();

            //Customer
            CreateMap<Customer, SaveCustomerResource>()
                .ForMember(cr => cr.Username, opt => opt.MapFrom(c => c.Username))
                .ForMember(cr => cr.Password, opt => opt.MapFrom(c => c.Password))
                .ForMember(cr => cr.IsAdmin, opt => opt.MapFrom(c => c.IsAdmin))
                .ForMember(cr => cr.Details, opt => opt.MapFrom(c => c.Details))
                .ForMember(cr => cr.Appointments, opt => opt.MapFrom(s => s.Appointments.Select(a => a.Id)))
                .ForMember(cr => cr.Address, opt => opt.MapFrom(c => c.Address));

            CreateMap<Customer, UpdateCustomerResource>()
                .ForMember(cr => cr.Username, opt => opt.MapFrom(c => c.Username))
                .ForMember(cr => cr.Password, opt => opt.MapFrom(c => c.Password))
                .ForMember(cr => cr.IsAdmin, opt => opt.MapFrom(c => c.IsAdmin))
                .ForMember(cr => cr.Details, opt => opt.MapFrom(c => c.Details))
                .ForMember(cr => cr.Appointments, opt => opt.MapFrom(s => s.Appointments.Select(a => a.Id)))
                .ForMember(cr => cr.Address, opt => opt.MapFrom(c => c.Address));

            CreateMap<Customer, CustomerResource>()
                .ForMember(cr => cr.Details, opt => opt.MapFrom(s => s.Details))
                .ForMember(cr => cr.Address, opt => opt.MapFrom(c => c.Address))
                .ForMember(cr => cr.Appointments, opt => opt.MapFrom(c => c.Appointments.Select(c => new AppointmentResource
                {
                    Id = c.Id,
                    AppointmentDate = c.AppointmentDate,
                    Description = c.Description,
                    Status = c.Status,
                    Specialist = c.Specialist == null ? new KeyValuePairResource { FullName = "User no longer exists" } : new KeyValuePairResource { Id = c.Specialist.Id, FullName = c.Specialist.Details.FirstName + " " + c.Specialist.Details.LastName, PhoneNumber = c.Specialist.Details.PhoneNumber },
                    Customer = c.Customer == null ? new KeyValuePairResource { FullName = "User no longer exists" } : new KeyValuePairResource { Id = c.Customer.Id, FullName = c.Customer.Details.FirstName + " " + c.Customer.Details.LastName, PhoneNumber = c.Customer.Details.PhoneNumber },
                    Company = c.Company == null ? new KeyValuePairResource { FullName = "Company no longer exists" } : new KeyValuePairResource { Id = c.Company.Id, FullName = c.Company.CompanyName, PhoneNumber = c.Company.PhoneNumber }
                })));

            //Specialist
            CreateMap<Specialist, SaveSpecialistResource>()
            .ForMember(sr => sr.Username, opt => opt.MapFrom(s => s.Username))
            .ForMember(sr => sr.Password, opt => opt.MapFrom(s => s.Password))
            .ForMember(sr => sr.IsAdmin, opt => opt.MapFrom(s => s.IsAdmin))
            .ForMember(sr => sr.SpecialistType, opt => opt.MapFrom(s => s.SpecialistType))
            .ForMember(sr => sr.Area, opt => opt.MapFrom(s => s.Area))
            .ForMember(sr => sr.Details, opt => opt.MapFrom(s => s.Details))
            .ForMember(sr => sr.Appointments, opt => opt.MapFrom(s => s.Appointments.Select(a => a.Id)))
            .ForMember(sr => sr.Companies, opt => opt.MapFrom(s => s.Companies.Select(sc => sc.CompanyId))); //many-to-many relationship


            CreateMap<Specialist, UpdateSpecialistResource>()
                .ForMember(sr => sr.Username, opt => opt.MapFrom(s => s.Username))
                .ForMember(sr => sr.Password, opt => opt.MapFrom(s => s.Password))
                .ForMember(sr => sr.IsAdmin, opt => opt.MapFrom(s => s.IsAdmin))
                .ForMember(sr => sr.SpecialistType, opt => opt.MapFrom(s => s.SpecialistType))
                .ForMember(sr => sr.Area, opt => opt.MapFrom(s => s.Area))
                .ForMember(sr => sr.Details, opt => opt.MapFrom(s => s.Details))
                .ForMember(sr => sr.Appointments, opt => opt.MapFrom(s => s.Appointments.Select(a => a.Id)))
                .ForMember(sr => sr.Companies, opt => opt.MapFrom(s => s.Companies.Select(sc => sc.CompanyId)));

            CreateMap<Specialist, SpecialistResource>()
                .ForMember(sr => sr.Details, opt => opt.MapFrom(s => s.Details))
                .ForMember(sr => sr.Companies, opt => opt.MapFrom(s => s.Companies.Select(sr => new KeyValuePairResource { Id = sr.Company.Id, FullName = sr.Company.CompanyName, PhoneNumber = sr.Company.PhoneNumber })))
                .ForMember(sr => sr.Appointments, opt => opt.MapFrom(s => s.Appointments.Select(s => new AppointmentResource
                {
                    Id = s.Id,
                    AppointmentDate = s.AppointmentDate,
                    Description = s.Description,
                    Status = s.Status,
                    Specialist = s.Specialist == null ? new KeyValuePairResource { FullName = "User no longer exists" } : new KeyValuePairResource { Id = s.Specialist.Id, FullName = s.Specialist.Details.FirstName + " " + s.Specialist.Details.LastName, PhoneNumber = s.Specialist.Details.PhoneNumber },
                    Customer = s.Customer == null ? new KeyValuePairResource { FullName = "User no longer exists" } : new KeyValuePairResource { Id = s.Customer.Id, FullName = s.Customer.Details.FirstName + " " + s.Customer.Details.LastName, PhoneNumber = s.Customer.Details.PhoneNumber },
                    Company = s.Company == null ? new KeyValuePairResource { FullName = "Company no longer exists" } : new KeyValuePairResource { Id = s.Company.Id, FullName = s.Company.CompanyName, PhoneNumber = s.Company.PhoneNumber }
                })));

            //User
            CreateMap<User, UserResource>()
                .ForMember(ur => ur.Username, opt => opt.MapFrom(u => u.Username))
                .ForMember(ur => ur.Password, opt => opt.MapFrom(u => u.Password)) // to be removed for security reasons?
                .ForMember(ur => ur.IsAdmin, opt => opt.MapFrom(u => u.IsAdmin))
                .ForMember(ur => ur.Details, opt => opt.MapFrom(u => u.Details));

            //Appointment
            CreateMap<Appointment, SaveAppointmentResource>()
                .ForMember(ar => ar.AppointmentDate, opt => opt.MapFrom(a => a.AppointmentDate))
                .ForMember(ar => ar.Status, opt => opt.MapFrom(a => a.Status))
                .ForMember(ar => ar.Description, opt => opt.MapFrom(a => a.Description))
                .ForMember(ar => ar.CustomerId, opt => opt.MapFrom(a => a.CustomerId))
                .ForMember(ar => ar.SpecialistId, opt => opt.MapFrom(a => a.SpecialistId))
                .ForMember(ar => ar.CompanyId, opt => opt.MapFrom(a => a.CompanyId));

            CreateMap<Appointment, AppointmentResource>()
                .ForMember(ar => ar.Customer, opt => opt.MapFrom(a => new KeyValuePairResource { Id = a.Customer.Id, FullName = a.Customer.Details.FirstName + " " + a.Customer.Details.LastName, PhoneNumber = a.Customer.Details.PhoneNumber }))
                .ForMember(ar => ar.Specialist, opt => opt.MapFrom(a => new KeyValuePairResource { Id = a.Specialist.Id, FullName = a.Specialist.Details.FirstName + " " + a.Specialist.Details.LastName, PhoneNumber = a.Specialist.Details.PhoneNumber }))
                .ForMember(ar => ar.Company, opt => opt.MapFrom(a => new KeyValuePairResource { Id = a.Company.Id, FullName = a.Company.CompanyName, PhoneNumber = a.Company.PhoneNumber }));

            //Company
            CreateMap<Company, SaveCompanyResource>()
                .ForMember(cr => cr.NIP, opt => opt.MapFrom(c => c.NIP))
                .ForMember(cr => cr.IsVerified, opt => opt.MapFrom(c => c.IsVerified))
                .ForMember(cr => cr.CompanyName, opt => opt.MapFrom(c => c.CompanyName))
                .ForMember(cr => cr.Address, opt => opt.MapFrom(c => c.Address))
                .ForMember(cr => cr.Rating, opt => opt.MapFrom(c => c.Rating))
                .ForMember(cr => cr.Description, opt => opt.MapFrom(c => c.Description))
                .ForMember(cr => cr.PhoneNumber, opt => opt.MapFrom(c => c.PhoneNumber))
                .ForMember(cr => cr.Specialists, opt => opt.MapFrom(c => c.Specialists.Select(cs => cs.SpecialistId)))
                .ForMember(cr => cr.Appointments, opt => opt.MapFrom(c => c.Appointments.Select(c => c.Id)));

            CreateMap<Company, CompanyResource>()
                .ForMember(cr => cr.Specialists, opt => opt.MapFrom(c => c.Specialists.Select(cs => new KeyValuePairResource { Id = cs.Specialist.Id, FullName = cs.Specialist.Details.FirstName + " " + cs.Specialist.Details.LastName, PhoneNumber = cs.Specialist.Details.PhoneNumber } )))
                .ForMember(cr => cr.Appointments, opt => opt.MapFrom(c => c.Appointments.Select(cs => new AppointmentResource { Id = cs.Id, AppointmentDate = cs.AppointmentDate, Description = cs.Description, Status = cs.Status,
                    Specialist = cs.Specialist == null ? new KeyValuePairResource { FullName = "User no longer exists" } : new KeyValuePairResource {Id = cs.Specialist.Id, FullName = cs.Specialist.Details.FirstName + " " + cs.Specialist.Details.LastName, PhoneNumber = cs.Specialist.Details.PhoneNumber },
                    Customer = cs.Customer == null ? new KeyValuePairResource { FullName = "User no longer exists" } : new KeyValuePairResource { Id = cs.Customer.Id, FullName = cs.Customer.Details.FirstName + " " + cs.Customer.Details.LastName, PhoneNumber = cs.Customer.Details.PhoneNumber },
                    Company = cs.Company == null ? new KeyValuePairResource { FullName = "Company no longer exists" } : new KeyValuePairResource { Id = cs.Company.Id, FullName = cs.Company.CompanyName, PhoneNumber = cs.Company.PhoneNumber }
                })));

            //API RESOURCES TO DOMAIN
            //UserDetails
            CreateMap<SaveUserDetailsResource, UserDetails>()
                .ForMember(ud => ud.Id, opt => opt.Ignore())
                .ForMember(ud => ud.UserId, opt => opt.Ignore())
                .ForMember(ud => ud.DateOfRegistration, opt => opt.Ignore())
                .ForMember(ud => ud.FirstName, opt => opt.MapFrom(udr => udr.FirstName))
                .ForMember(ud => ud.LastName, opt => opt.MapFrom(udr => udr.LastName))
                .ForMember(ud => ud.EMail, opt => opt.MapFrom(udr => udr.EMail))
                .ForMember(ud => ud.PhoneNumber, opt => opt.MapFrom(udr => udr.PhoneNumber));


            //Customer
            CreateMap<UpdateCustomerResource, Customer>()
                .ForMember(c => c.Id, opt => opt.Ignore())
                .ForMember(c => c.Appointments, opt => opt.Ignore())
                .ForMember(c => c.Username, opt => opt.Ignore())
                .ForMember(c => c.Password, opt => opt.Ignore())
                .ForMember(c => c.IsAdmin, opt => opt.MapFrom(cr => cr.IsAdmin))
                .ForMember(c => c.Address, opt => opt.MapFrom(cr => cr.Address))
                .ForMember(c => c.Details, opt => opt.MapFrom(cr => cr.Details));

            //Customer
            CreateMap<SaveCustomerResource, Customer>()
                .ForMember(c => c.Id, opt => opt.Ignore())
                .ForMember(c => c.Appointments, opt => opt.Ignore())
                .ForMember(c => c.Username, opt => opt.MapFrom(cr => cr.Username))
                .ForMember(c => c.Password, opt => opt.MapFrom(cr => cr.Password))
                .ForMember(c => c.IsAdmin, opt => opt.MapFrom(cr => cr.IsAdmin))
                .ForMember(c => c.Address, opt => opt.MapFrom(cr => cr.Address))
                .ForMember(c => c.Details, opt => opt.MapFrom(cr => cr.Details));


            //Specialist
            CreateMap<SaveSpecialistResource, Specialist>()
                .ForMember(s => s.Id, opt => opt.Ignore())
                .ForMember(s => s.Appointments, opt => opt.Ignore())
                .ForMember(s => s.Companies, opt => opt.Ignore())
                .ForMember(s => s.Username, opt => opt.MapFrom(sr => sr.Username))
                .ForMember(s => s.Password, opt => opt.MapFrom(sr => sr.Password))
                .ForMember(s => s.IsAdmin, opt => opt.MapFrom(sr => sr.IsAdmin))
                .ForMember(s => s.SpecialistType, opt => opt.MapFrom(sr => sr.SpecialistType))
                .ForMember(s => s.Area, opt => opt.MapFrom(sr => sr.Area))
                .ForMember(s => s.Details, opt => opt.MapFrom(sr => sr.Details))
                .AfterMap((sr, s) =>
                {
                    //Remove companies

                    var removedCompanies = new List<SpecialistCompanies>();

                    foreach (var c in s.Companies)
                    {
                        if (!sr.Companies.Contains(c.CompanyId))
                        {
                            removedCompanies.Add(c);
                        }
                    }

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


            CreateMap<UpdateSpecialistResource, Specialist>()
              .ForMember(s => s.Id, opt => opt.Ignore())
              .ForMember(s => s.Appointments, opt => opt.Ignore())
              .ForMember(s => s.Companies, opt => opt.Ignore())
              .ForMember(s => s.Username, opt => opt.Ignore())
              .ForMember(s => s.Password, opt => opt.Ignore())
              .ForMember(s => s.IsAdmin, opt => opt.MapFrom(sr => sr.IsAdmin))
              .ForMember(s => s.SpecialistType, opt => opt.MapFrom(sr => sr.SpecialistType))
              .ForMember(s => s.Area, opt => opt.MapFrom(sr => sr.Area))
              .ForMember(s => s.Details, opt => opt.MapFrom(sr => sr.Details))
              .AfterMap((sr, s) =>
                {
                    //Remove companies

                    var removedCompanies = new List<SpecialistCompanies>();

                      foreach (var c in s.Companies)
                      {
                          if (!sr.Companies.Contains(c.CompanyId))
                          {
                              removedCompanies.Add(c);
                          }
                      }

                      foreach (var c in removedCompanies)
                      {
                          s.Companies.Remove(c);
                      }

                            //Add new companies
                            var addedCompanies = sr.Companies.Where(id => !s.Companies.Any(c => c.CompanyId == id)).Select(id => new SpecialistCompanies { CompanyId = id });

                      foreach (var c in addedCompanies)
                      {
                          s.Companies.Add(c);
                      }

          }); //many-to-many relationship

            //Photos
            CreateMap<PhotoResource, Photo>()
                .ForMember(p => p.UserId, opt => opt.Ignore());

            //User
            CreateMap<UserResource, User>()
                .ForMember(u => u.Id, opt => opt.Ignore())
                .ForMember(u => u.Username, opt => opt.MapFrom(ur => ur.Username))
                .ForMember(u => u.Password, opt => opt.MapFrom(ur => ur.Password))
                .ForMember(u => u.IsAdmin, opt => opt.MapFrom(ur => ur.IsAdmin))
                .ForMember(u => u.Details, opt => opt.MapFrom(ur => ur.Details));



            //JSONPatchDoc
            CreateMap<JsonPatchDocument<SaveCustomerResource>, JsonPatchDocument<Customer>>();
            CreateMap<Operation<SaveCustomerResource>, Operation<Customer>>();

            //Appointment
            CreateMap<SaveAppointmentResource, Appointment>()
                .ForMember(a => a.Id, opt => opt.Ignore())
                .ForMember(a => a.AppointmentDate, opt => opt.MapFrom(ar => ar.AppointmentDate))
                .ForMember(a => a.Status, opt => opt.MapFrom(ar => ar.Status))
                .ForMember(a => a.Description, opt => opt.MapFrom(ar => ar.Description))
                .ForMember(a => a.CustomerId, opt => opt.MapFrom(ar => ar.CustomerId))
                .ForMember(a => a.SpecialistId, opt => opt.MapFrom(ar => ar.SpecialistId))
                .ForMember(a => a.CompanyId, opt => opt.MapFrom(ar => ar.CompanyId));

            //Company
            CreateMap<SaveCompanyResource, Company>()
                .ForMember(c => c.Id, opt => opt.Ignore())
                .ForMember(c => c.NIP, opt => opt.MapFrom(cr => cr.NIP))
                .ForMember(c => c.IsVerified, opt => opt.MapFrom(cr => cr.IsVerified))
                .ForMember(c => c.CompanyName, opt => opt.MapFrom(cr => cr.CompanyName))
                .ForMember(c => c.Address, opt => opt.MapFrom(cr => cr.Address))
                .ForMember(c => c.Rating, opt => opt.MapFrom(cr => cr.Rating))
                .ForMember(c => c.Description, opt => opt.MapFrom(cr => cr.Description))
                .ForMember(c => c.PhoneNumber, opt => opt.MapFrom(cr => cr.PhoneNumber))
                .ForMember(c => c.Specialists, opt => opt.Ignore())
                .ForMember(c => c.Appointments, opt => opt.Ignore())
                .AfterMap((cr, c) =>
                {
                    var removedSpecialists = new List<SpecialistCompanies>();

                    foreach (var s in c.Specialists)
                    {
                        if (!cr.Specialists.Contains(s.SpecialistId))
                        {
                            removedSpecialists.Add(s);
                        }

                    }

                    foreach (var s in removedSpecialists)
                    {
                        c.Specialists.Remove(s);
                    }

                    var addedSpecialists = cr.Specialists.Where(sId => !c.Specialists.Any(s => s.SpecialistId == sId)).Select(sId => new SpecialistCompanies { SpecialistId = sId });
                    foreach (var s in addedSpecialists)
                    {
                        c.Specialists.Add(s);
                    }

                });
        }
    }
}
