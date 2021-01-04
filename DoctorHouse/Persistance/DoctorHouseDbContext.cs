using DoctorHouse.Models;
using Microsoft.EntityFrameworkCore;
using System;


namespace DoctorHouse.Persistance
{
    public class DoctorHouseDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<UserDetails> UserDetails { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Specialist> Specialists { get; set; }
        public DbSet<Company> Companies { get; set; }

        public DbSet<SpecialistCompanies> SpecialistCompanies { get; set; }
        public DbSet<Appointment> Appointments { get; set; }

        public DoctorHouseDbContext(DbContextOptions<DoctorHouseDbContext> options)
        : base(options)
        {

        }
        public DoctorHouseDbContext()
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Specialist>().Property(s => s.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<Customer>().Property(c => c.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<UserDetails>().Property(ud => ud.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<Company>().Property(c => c.Id).ValueGeneratedOnAdd();
            modelBuilder.Entity<Appointment>().Property(a => a.Id).ValueGeneratedOnAdd();



            //one-to-one - REQUIRED
            modelBuilder.Entity<User>()
            .HasOne(u => u.Details)
            .WithOne(ud => ud.User)
            .HasForeignKey<UserDetails>(ud => ud.UserId);


            //many-to-many
            modelBuilder.Entity<SpecialistCompanies>()
            .HasKey(x => new { x.SpecialistId, x.CompanyId });

            //zero-to-many
            modelBuilder.Entity<Specialist>()
                .HasMany(s => s.Appointments)
                .WithOne(a => a.Specialist)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.ClientSetNull);

            modelBuilder.Entity<Customer>()
                .HasMany(c => c.Appointments)
                .WithOne(a => a.Customer)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.ClientSetNull);

            modelBuilder.Entity<Company>()
                .HasMany(com => com.Appointments)
                .WithOne(a => a.Company)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.ClientSetNull);

            modelBuilder.Entity<Customer>().HasData(
                new Customer { Id = 1, Username = "Pipi", Password = "Pipi666", Address = "ul. Pipiego 2", IsAdmin = false },
                new Customer { Id = 2, Username = "Piri", Password = "123456", Address = "os. Pipowo 5/4", IsAdmin = false }
                );

            modelBuilder.Entity<UserDetails>().HasData(
                new UserDetails { Id = 1, UserId = 1, FirstName = "Pipek", LastName = "Pipowski", DateOfRegistration = DateTime.Now, EMail = "pipi@pip.pi", PhoneNumber = 123456789 },
                new UserDetails { Id = 2, UserId = 2, FirstName = "Pirek", LastName = "Pir", DateOfRegistration = DateTime.Now, EMail = "piri666@pip.pir", PhoneNumber = 666777111 }
                );

            modelBuilder.Entity<Company>().HasData(
                new Company { Id = 1, Address = "Ul. Wielkiego Wybuchu 5", CompanyName = "BigPips", Description = "Robimy wszystko od ręki", IsVerified = true, NIP = 1234567890, PhoneNumber = 123432234 },
                new Company { Id = 2, Address = "Ul. Napoleona Pipa 7/10", CompanyName = "The Pipis", Description = "Piriririririr", IsVerified = true, NIP = 9807654321, PhoneNumber = 333222111 }
                );

            modelBuilder.Entity<Specialist>().HasData(
                new Specialist { Id = 3, Username = "ElectricWizard", Password = "elelele", Area = 5, IsAdmin = true, SpecialistType = "Electrician", },
                new Specialist { Id = 4, Username = "FlowerPower", Password = "66666666", Area = 3, IsAdmin = false, SpecialistType = "Gardener"},
                new Specialist { Id = 5, Username = "ZlotaRączka", Password = "0%6hasfa", Area = 1, IsAdmin = false, SpecialistType = "Plumber"}
                );

            modelBuilder.Entity<UserDetails>().HasData(
                new UserDetails { Id = 3, UserId = 3, FirstName = "Jan", LastName = "Kowalski", DateOfRegistration = DateTime.Now, EMail = "jank@gmail0.com", PhoneNumber = 444234089 },
                new UserDetails { Id = 4, UserId = 4, FirstName = "Alojzy", LastName = "Kwiatek", DateOfRegistration = DateTime.Now, EMail = "alojzyKA@gmail.pl", PhoneNumber = 654354676 },
                new UserDetails { Id = 5, UserId = 5, FirstName = "Halina", LastName = "Kluczkowska", DateOfRegistration = DateTime.Now, EMail = "halinka@onet.com", PhoneNumber = 967545234 }
                );

            modelBuilder.Entity<SpecialistCompanies>().HasData(
                new SpecialistCompanies { CompanyId = 1, SpecialistId = 1},
                new SpecialistCompanies { CompanyId = 2, SpecialistId = 2 },
                new SpecialistCompanies { CompanyId = 1, SpecialistId = 3 },
                new SpecialistCompanies { CompanyId = 2, SpecialistId = 3 }
                );

        }

    }
}

