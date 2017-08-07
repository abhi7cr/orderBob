﻿﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Orders.DataAccess.Models;
using Orders.DataAccess.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Orders.Web.Controllers
{

    public class OrdersController : Controller
    {
        private IOrderRepository _orderRepository;
        public OrdersController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;

        }
        // GET: api/orders/1
        [HttpGet("api/users/{id}/orders"), Route("api/users/{id}/orders")]
        public IQueryable<Order> GetByUser(int id)
        {
            return _orderRepository.GetOrdersByUser(id);
        }

        // GET api/users/5
        [HttpGet("api/users/{userId}/orders/{orderId}", Name = "GetOrder"), Route("api/users/{userId}/orders/{orderId}")]
        public async Task<ActionResult> Get(int userId, int orderId)
        {
            var order = await _orderRepository.GetById(orderId);
            return Ok(order);
        }

        // POST api/orders
        [HttpPost(),Route("api/users/{id}/orders")]
        public async Task<ActionResult> Post(int id, [FromBody]Order order)
        {
			if (!checkUserIdFromRequestBodyAndUrl(id, order))
				return BadRequest("Incorrect UserId");
            
			var orderEntity = _orderRepository.Add(order);
			await _orderRepository.Save();

			if (orderEntity == null)
				return BadRequest("Tracking Number, Location details and UserId are required");

			order.OrderId = orderEntity.Entity.OrderId;
			return Ok(order);
        }

        // PUT api/orders/5
        [HttpPut(),Route("api/users/{id}/orders")]
        public async Task<ActionResult> Put(int id, [FromBody]Order order)
        {
    		if (!checkUserIdFromRequestBodyAndUrl(id, order))
				return BadRequest("Incorrect UserId");

			var orderEntity = _orderRepository.Edit(order);
			await _orderRepository.Save();

			if (orderEntity == null)
				return BadRequest("Tracking Number, Location details, OrderId and UserId are required");
            
            order.OrderId = orderEntity.Entity.OrderId;
			return Ok(order);
        }

        // DELETE api/orders
        [HttpDelete(),Route("api/users/{id}/orders")]
        public async Task<ActionResult> Delete(int id, [FromBody]Order order)
        {
            if(!checkUserIdFromRequestBodyAndUrl(id, order))
				return BadRequest("Incorrect UserId");

            var orderEntity = _orderRepository.Delete(order);

			if (orderEntity == null)
				return BadRequest("FirstName, LastName and UserId required");

            await _orderRepository.Save();

			return Ok(order);
        }

        #region Helper methods
        private bool checkUserIdFromRequestBodyAndUrl(int id, Order order){
            return id == order.UserId;
        }
		#endregion


	}
}
