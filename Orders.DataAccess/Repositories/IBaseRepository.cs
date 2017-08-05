using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Orders.DataAccess.Repositories
{
	public interface IBaseRepository<T> where T : class
	{

		IQueryable<T> GetAll();
		Task<T> GetById(int id);
		IQueryable<T> FindBy(Expression<Func<T, bool>> predicate);
		EntityEntry<T> Add(T entity);
		EntityEntry<T> Delete(T entity);
		EntityEntry<T> Edit(T entity);
		Task<int> Save();
	}
}
