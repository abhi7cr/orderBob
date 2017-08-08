using System;
using Xunit;
using Moq;
using Orders.DataAccess.Models;
using Orders.DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;

namespace Orders.DataAccess.Tests
{
    public class UserRepositoryTests
    {
        private UserRepository _userRepository;
        private OrdersContext _ordersContext;

        [Fact]
        public async void CreateUser()
        {

            DbContextOptions<OrdersContext> options;
            var builder = new DbContextOptionsBuilder<OrdersContext>();
            builder.UseInMemoryDatabase(databaseName: "CreateUser");
            options = builder.Options;
            User expectedUser = new User() { FirstName = "Abhishek", LastName = "Raj" };

            await SaveNewUser(options, expectedUser);

            User actualUser = _userRepository.GetAll().FirstOrDefault();

            Assert.NotNull(actualUser);
            AssertNewUser(expectedUser, actualUser);

            //var mockSet = new Mock<DbSet<User>>();
            //var mockContext = new Mock<OrdersContext>();
            //mockContext.Setup(m => m.Users).Returns(mockSet.Object);

            //var mockUserRepo = new UserRepository(mockContext.Object);
            //mockUserRepo.Add(new User(){FirstName = "Abhi", LastName = "Raj"});

            //mockSet.Verify(m => m.Add(It.IsAny<User>()), Times.Once());

        }


        [Theory]
        [InlineData(1)]
        [InlineData(3)]
		public async void GetUser(int value)
		{

			DbContextOptions<OrdersContext> options;
			var builder = new DbContextOptionsBuilder<OrdersContext>();
			builder.UseInMemoryDatabase(databaseName: "GetUser");
			options = builder.Options;
			User expectedUser = new User() { FirstName = "Abhishek", LastName = "Raj" };

			await SaveNewUser(options, expectedUser);
            User actualUser = await _userRepository.GetById(value);
			
            if(value == 1)
            {
                Assert.NotNull(actualUser);
                AssertNewUser(expectedUser, actualUser);
            }
            else          
			    Assert.Null(actualUser);
		}

        #region Helper Methods
        public async Task<int> SaveNewUser(DbContextOptions<OrdersContext> options, User testUser)
        {
            _ordersContext = new OrdersContext(options);
            _userRepository = new UserRepository(_ordersContext);
            _userRepository.Add(testUser);
            var result = await _userRepository.Save();
            return result;
        }

        private void AssertNewUser(User expectedUser, User actualUser){
            
			Assert.Equal(expectedUser.FirstName, actualUser.FirstName);
			Assert.Equal(expectedUser.LastName, actualUser.LastName);
        }

        #endregion
    }
}
