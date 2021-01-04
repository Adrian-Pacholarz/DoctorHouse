﻿// <auto-generated />
using System;
using DoctorHouse.Persistance;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DoctorHouse.Migrations
{
    [DbContext(typeof(DoctorHouseDbContext))]
    [Migration("20201229005628_AddGenerateOnAddValueToCustomerAndSpecialist")]
    partial class AddGenerateOnAddValueToCustomerAndSpecialist
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("DoctorHouse.Models.Appointment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<DateTime>("AppointmentDate")
                        .HasColumnType("datetime2");

                    b.Property<int?>("CompanyId")
                        .HasColumnType("int");

                    b.Property<int?>("CustomerId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(MAX)");

                    b.Property<int?>("SpecialistId")
                        .HasColumnType("int");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CompanyId");

                    b.HasIndex("CustomerId");

                    b.HasIndex("SpecialistId");

                    b.ToTable("Appointment");
                });

            modelBuilder.Entity("DoctorHouse.Models.Company", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(MAX)");

                    b.Property<string>("CompanyName")
                        .IsRequired()
                        .HasColumnType("nvarchar(30)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(MAX)");

                    b.Property<bool>("IsVerified")
                        .HasColumnType("bit");

                    b.Property<long>("NIP")
                        .HasColumnType("bigint");

                    b.Property<long>("PhoneNumber")
                        .HasColumnType("bigint");

                    b.Property<byte>("Rating")
                        .HasColumnType("tinyint");

                    b.HasKey("Id");

                    b.ToTable("Company");
                });

            modelBuilder.Entity("DoctorHouse.Models.SpecialistCompanies", b =>
                {
                    b.Property<int>("SpecialistId")
                        .HasColumnType("int");

                    b.Property<int>("CompanyId")
                        .HasColumnType("int");

                    b.HasKey("SpecialistId", "CompanyId");

                    b.HasIndex("CompanyId");

                    b.ToTable("SpecialistCompanies");
                });

            modelBuilder.Entity("DoctorHouse.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsAdmin")
                        .HasColumnType("bit");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("varchar(20)");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasDiscriminator<string>("Discriminator").HasValue("User");
                });

            modelBuilder.Entity("DoctorHouse.Models.UserDetails", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<DateTime>("DateOfRegistration")
                        .HasColumnType("datetime2");

                    b.Property<string>("EMail")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(20)");

                    b.Property<long>("PhoneNumber")
                        .HasColumnType("bigint");

                    b.Property<string>("SecondName")
                        .IsRequired()
                        .HasColumnType("nvarchar(30)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("UserDetails");
                });

            modelBuilder.Entity("DoctorHouse.Models.Customer", b =>
                {
                    b.HasBaseType("DoctorHouse.Models.User");

                    b.Property<string>("Address")
                        .IsRequired()
                        .HasColumnType("nvarchar(MAX)");

                    b.HasDiscriminator().HasValue("Customer");
                });

            modelBuilder.Entity("DoctorHouse.Models.Specialist", b =>
                {
                    b.HasBaseType("DoctorHouse.Models.User");

                    b.Property<int?>("Area")
                        .HasColumnType("int");

                    b.Property<string>("SpecialistType")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasDiscriminator().HasValue("Specialist");
                });

            modelBuilder.Entity("DoctorHouse.Models.Appointment", b =>
                {
                    b.HasOne("DoctorHouse.Models.Company", "Company")
                        .WithMany("Appointments")
                        .HasForeignKey("CompanyId");

                    b.HasOne("DoctorHouse.Models.Customer", "Customer")
                        .WithMany("Appointments")
                        .HasForeignKey("CustomerId");

                    b.HasOne("DoctorHouse.Models.Specialist", "Specialist")
                        .WithMany("Appointments")
                        .HasForeignKey("SpecialistId");

                    b.Navigation("Company");

                    b.Navigation("Customer");

                    b.Navigation("Specialist");
                });

            modelBuilder.Entity("DoctorHouse.Models.SpecialistCompanies", b =>
                {
                    b.HasOne("DoctorHouse.Models.Company", "Company")
                        .WithMany("SpecialistCompanies")
                        .HasForeignKey("CompanyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("DoctorHouse.Models.Specialist", "Specialist")
                        .WithMany("SpecialistCompanies")
                        .HasForeignKey("SpecialistId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Company");

                    b.Navigation("Specialist");
                });

            modelBuilder.Entity("DoctorHouse.Models.UserDetails", b =>
                {
                    b.HasOne("DoctorHouse.Models.User", "User")
                        .WithOne("UserDetails")
                        .HasForeignKey("DoctorHouse.Models.UserDetails", "UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("DoctorHouse.Models.Company", b =>
                {
                    b.Navigation("Appointments");

                    b.Navigation("SpecialistCompanies");
                });

            modelBuilder.Entity("DoctorHouse.Models.User", b =>
                {
                    b.Navigation("UserDetails");
                });

            modelBuilder.Entity("DoctorHouse.Models.Customer", b =>
                {
                    b.Navigation("Appointments");
                });

            modelBuilder.Entity("DoctorHouse.Models.Specialist", b =>
                {
                    b.Navigation("Appointments");

                    b.Navigation("SpecialistCompanies");
                });
#pragma warning restore 612, 618
        }
    }
}
