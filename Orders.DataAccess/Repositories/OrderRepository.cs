using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Orders.DataAccess.Models;
using System.Linq;

namespace Orders.DataAccess.Repositories
{
	public class OrderRepository :
				BaseRepository<Order, OrdersContext>, IOrderRepository
	{
		//public OrderRepository(OrdersContext ordersContext)
		//{
		//	this.Context = ordersContext;
		//}

		public IQueryable<Order> GetOrdersByUser(int userId)
		{

			var orders = base.GetAll();

		    //Filter by userId
            return orders.Where(o=>o.UserId == userId);
		}

		public override async Task<Order> GetById(int id)
		{

			var order = await base.GetById(id);
            await this.Context.Entry(order).Reference(x => x.Location).LoadAsync();
			return order;
		}

        public IQueryable<Order> GetOrderById(int id)
		{

            var order =  base.GetAll()
                                  .Where(x => x.OrderId == id)
                                  .Include(x => x.Location);
       //     if(order != null)
			    //await this.Context.Entry(order).Reference(x => x.Location).LoadAsync();
			return order;
		}

		public override EntityEntry<Order> Add(Order entity)
		{
			if (entity != null &&
				entity.TrackingId != null &&
				entity.UserId != 0 &&
				entity.Location != null)
			{
				return base.Add(entity);
			}
			else
			{
				return null;
			}
		}

		public override EntityEntry<Order> Edit(Order entity)
		{
			if (entity != null &&
					  entity.UserId != 0 &&
					  entity.TrackingId != null &&
					  entity.OrderId != 0 &&
					  entity.Location != null)
			{
				return base.Edit(entity);

			}
			else
			{
				return null;
			}
		}
	}
}


