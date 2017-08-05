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
        [Route("api/getOrdersByUser/{id}")]
        public IQueryable<Order> GetByUser(int id)
        {
            return _orderRepository.GetOrdersByUser(id);
        }

        // GET api/users/5
        [Route("api/getOrder/{id}")]
        public IQueryable<Order> Get(int id)
        {
            return _orderRepository.GetOrderById(id);
            //if (order == null)
            //    return NotFound("Order not found!");
            
            //return Ok(order);
        }

        // POST api/orders
        [Route("api/createOrder")]
        public async Task<ActionResult> Post([FromBody]Order order)
        {
			var orderEntity = _orderRepository.Add(order);
			await _orderRepository.Save();

			if (orderEntity == null)
				return BadRequest("Tracking Number, Location details and UserId are required");

			 return Ok("order created successfully!");
        }

        // PUT api/orders/5
        [Route("api/updateOrder/{id}")]
        public async Task<ActionResult> Put(int id, [FromBody]Order order)
        {
			var orderEntity = _orderRepository.Edit(order);
			await _orderRepository.Save();

			if (orderEntity == null)
				return BadRequest("Tracking Number, Location details, OrderId and UserId are required");

			return Ok("order updated successfully!");
        }

        // DELETE api/orders
        [Route("api/deleteOrder")]
        public async Task<ActionResult> Delete(Order order)
        {
            var orderEntity = _orderRepository.Delete(order);

			if (orderEntity == null)
				return BadRequest("FirstName, LastName and UserId required");

            await _orderRepository.Save();

			return Ok("User deleted successfully");  
        }
    }
}
