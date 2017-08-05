using System;
using Orders.DataAccess.Models;
using System.Collections.Generic;
using System.Linq;

namespace Orders.DataAccess.Repositories
{
    public interface IOrderRepository : IBaseRepository<Order>
    {
        //order specific methods
         IQueryable<Order> GetOrdersByUser(int userId);
		 IQueryable<Order> GetOrderById(int userId);
    }
}
