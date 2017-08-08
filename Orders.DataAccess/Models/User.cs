using System.Collections.Generic;

namespace Orders.DataAccess.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        //Navigation property
        public virtual List<Order> Orders { get; set; }
    }
}
