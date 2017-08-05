using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Orders.DataAccess.Models;

namespace Orders.DataAccess.Repositories
{
	public class UserRepository :
				BaseRepository<User, OrdersContext>, IUserRepository
	{
		//public UserRepository(OrdersContext ordersContext)
		//{
		//	this.Context = ordersContext;
		//}

		public override async Task<User> GetById(int id)
		{

			var user = await base.GetById(id);
            //await this.Context.Entry(user).Collection(x => x.Orders).LoadAsync();
			return user;
		}

		public override EntityEntry<User> Add(User entity)
		{
			if (entity != null && entity.FirstName != null && entity.LastName != null)
			{
				return base.Add(entity);

			}
			else
			{
				return null;
			}
		}

		public override EntityEntry<User> Edit(User entity)
		{
			if (entity != null &&
					  entity.UserId != 0 &&
					  entity.FirstName != null &&
					  entity.LastName != null)
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

