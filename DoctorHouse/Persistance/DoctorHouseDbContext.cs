using DoctorHouse.Models;
using Microsoft.EntityFrameworkCore;


namespace DoctorHouse.Persistance
{
    public class DoctorHouseDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<UserDetails> UserDetails { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Specialist> Specialists { get; set; }

        public DoctorHouseDbContext(DbContextOptions<DoctorHouseDbContext> options)
        : base(options)
        {

        }
        public DoctorHouseDbContext()
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //one-to-one
            modelBuilder.Entity<User>()
            .HasOne(u => u.UserDetails)
            .WithOne(ud => ud.User)
            .HasForeignKey<UserDetails>(ud => ud.UserId);
        }
    }
}

//protected override void OnModelCreating(ModelBuilder modelBuilder)
//{
//    //one-to-one
//    modelBuilder.Entity<Knight>()
//    .HasOne(k => k.Steed)
//    .WithOne(h => h.Owner)
//    .HasForeignKey<Horse>(h => h.KnightId);
