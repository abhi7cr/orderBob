using System;
namespace Orders.DataAccess.Models
{
    public class Location
    {
		public int LocationId { get; set; }
		public string Name { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Street { get; set; }
        public string ZipCode { get; set; }

		//Foreign keys & Navigation properties
	    public int OrderId { get; set; }
		public Order Order { get; set; }

    }
}
