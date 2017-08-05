using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Orders.DataAccess.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace Orders.DataAccess.Repositories
{
    public abstract class BaseRepository<T, C> :
    IBaseRepository<T> where T : class where C : DbContext, new()
    {

        private C _entities = new C();
        public C Context
        {

            get { return _entities; }
            set { _entities = value; }
        }

        public virtual IQueryable<T> GetAll()
        {

            IQueryable<T> query = _entities.Set<T>();
            return query;
        }

        public virtual async Task<T> GetById(int id)
        {
            return await _entities.Set<T>().FindAsync(id);
        }

        public IQueryable<T> FindBy(System.Linq.Expressions.Expression<Func<T, bool>> predicate)
        {

            IQueryable<T> query = _entities.Set<T>().Where(predicate);
            return query;
        }

        public virtual EntityEntry<T> Add(T entity)
        {
            return _entities.Set<T>().Add(entity);
        }

        public virtual EntityEntry<T> Delete(T entity)
        {
            return _entities.Set<T>().Remove(entity);
        }

        public virtual EntityEntry<T> Edit(T entity)
        {
            return _entities.Set<T>().Update(entity);
        }

        public virtual async Task<int> Save()
        {
            return await _entities.SaveChangesAsync();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {

            if (!this.disposed)
                if (disposing)
                    _entities.Dispose();

            this.disposed = true;
        }

        public void Dispose()
        {

            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}

