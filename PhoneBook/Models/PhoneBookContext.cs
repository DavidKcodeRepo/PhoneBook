using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace PhoneBook.Models;

public partial class PhoneBookContext : DbContext
{
    private readonly IConfiguration _configuration;
    public PhoneBookContext()
    { }

    public PhoneBookContext(DbContextOptions<PhoneBookContext> options, IConfiguration configuration)
	: base(options)
    {
		_configuration = configuration;
	}

    public virtual DbSet<PhoneBookEntry> PhoneBookEntries { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=PhoneBook;Trusted_Connection=True;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<PhoneBookEntry>(entity =>
        {
            entity.ToTable("PhoneBookEntry");

            entity.Property(e => e.Firstname).HasMaxLength(100);
            entity.Property(e => e.PhoneNumber).HasMaxLength(50);
            entity.Property(e => e.Surname).HasMaxLength(100);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
