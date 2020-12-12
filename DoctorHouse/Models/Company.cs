﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorHouse.Models
{
    public class Company
    {
        public int Id { get; set; }

        [Required]
        public Int64 NIP { get; set; }

        [Required]
        public bool IsVerified { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string CompanyName { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(MAX)")]
        public string Address { get; set; }

        public byte Rating { get; set; }

        [Column(TypeName = "nvarchar(MAX)")]
        public string Description { get; set; }

        [Required]
        public Int64 PhoneNumber { get; set; }

        [Required]
        public ICollection<SpecialistCompanies> SpecialistCompanies { get; set; }

        public ICollection<Appointment> Appointments { get; set; }


    }
}
