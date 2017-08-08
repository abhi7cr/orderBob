using System;
namespace Orders.DataAccess.Models
{
    public class Order
    {
		public int OrderId { get; set; }
		public string TrackingId { get; set; }

        //Foreign keys & Navigation properties
        public int UserId { get; set; }
        public virtual User User { get; set; }
        public virtual Location Location { get; set; }
    }
}
