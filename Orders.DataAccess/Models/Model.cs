using Microsoft.EntityFrameworkCore;

namespace Orders.DataAccess.Models
{
    public class OrdersContext : DbContext
    {
        private const string _connectionString = "Data Source=orderbob.conhcqpgorbb.us-east-1.rds.amazonaws.com,1433;Initial Catalog=orderbob;Persist Security Info=True;User ID=abhi7cr;Password=Keshibha71208;Encrypt=False";
        //public OrdersContext(DbContextOptions<OrdersContext> options)
        //: base(options)
        //{
        //}

        public OrdersContext()
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Location> Locations { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
            optionsBuilder.UseSqlServer(_connectionString);
		}
    }
}

