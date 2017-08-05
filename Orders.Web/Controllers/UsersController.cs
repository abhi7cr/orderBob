﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Orders.DataAccess.Models;
using Orders.DataAccess.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Orders.Web.Controllers
{
    [Route("api/users")]
    public class UsersController : Controller
    {
        private IUserRepository _userRepository;
        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;

        }
        // GET: api/values
        [HttpGet]
        public IQueryable<User> Get()
        {
            return _userRepository.GetAll();
        }

        // GET api/users/5
        [HttpGet("{id}", Name="GetUser")]
        public async Task<User> Get(int id)
        {
            return await _userRepository.GetById(id);
        }

        // POST api/users
        [HttpPost]
        public async Task<ActionResult> Post([FromBody]User user)
        {

                EntityEntry<User> userEntity = _userRepository.Add(user);

                if (userEntity == null)
                return BadRequest("FirstName and LastName required");
            
                await _userRepository.Save();

                return CreatedAtRoute("GetUser", new { id = userEntity.Entity.UserId }, user);
        }

        // PUT api/users/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody]User user)
        {
           
				EntityEntry<User> userEntity = _userRepository.Edit(user);
				await _userRepository.Save();

			    if (userEntity == null)
				    return BadRequest("FirstName, LastName and UserId required");

				return CreatedAtRoute("GetUser", new { id = userEntity.Entity.UserId }, user);
			
        }

        // DELETE api/users/
        [HttpDelete]
        public async Task<ActionResult> Delete([FromBody]User user)
        {
            EntityEntry<User> userEntity  = _userRepository.Delete(user);

			if (userEntity == null)
				return BadRequest("FirstName, LastName and UserId required");

            await _userRepository.Save();

            return Ok("User deleted successfully");
        }
    }
}
