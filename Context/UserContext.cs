using AngNetUser.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AngNetUser.Context
{
    public class UserContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // get the configuration from the app settings
            var config = new ConfigurationBuilder()
                  .SetBasePath(Directory.GetCurrentDirectory())
                  .AddJsonFile("appsettings.json")
                  .Build();

            // define the database to use
            optionsBuilder.UseSqlServer(config.GetConnectionString("DefaultDatabase"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // specify indexes to map
            modelBuilder.Entity<User>().HasIndex(e => e.Id).IsUnique()
                .ForSqlServerIsClustered(false);

            modelBuilder.Entity<User>().HasIndex(e => e.FirstName).IsUnique()
                .ForSqlServerIsClustered(false);

            modelBuilder.Entity<User>().HasIndex(e => e.LastName).IsUnique()
                .ForSqlServerIsClustered(false);

            modelBuilder.Entity<User>().HasIndex(e => e.Email).IsUnique()
                .ForSqlServerIsClustered(false);
        }
    }
}
