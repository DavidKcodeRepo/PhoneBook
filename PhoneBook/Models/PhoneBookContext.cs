using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

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

	/// <Remarks>
    /// Connection string is configured to a local instance of SQL express using windows certificate. 
    /// I didn't need to change this for it to work for me. -DK
    /// </Remarks>
	/// <param name="optionsBuilder"></param>
	protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //=> optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=PhoneBook;Trusted_Connection=True;TrustServerCertificate=true");
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=PhoneBook;Trusted_Connection=True;");

	

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
