﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Orders.DataAccess.Models;
using Orders.DataAccess.Repositories;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Orders.Web.Controllers
{
    [Route("api/users")]
    public class UsersController : Controller
    {
        private IUserRepository _userRepository;
        private ILogger _logger;
        public UsersController(IUserRepository userRepository,
                                ILogger<UsersController> logger)
        {
            _userRepository = userRepository;
            _logger = logger;
        }
        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var users = _userRepository.GetAll().ToList();
                _logger.LogInformation(200, "Users: {Users}", users);
                return Ok(users);
            }
            catch(Exception e){
				_logger.LogWarning(404, e, "Users: {Exception}", "Get users exception");
                return NotFound(e);
            }
        }

        // GET api/users/5
        [HttpGet("{id}", Name="GetUser")]
        public async Task<IActionResult> Get(int id)
        {
            var user = await _userRepository.GetById(id);
            return Ok(user);
        }

        // POST api/users
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]User user)
        {

                EntityEntry<User> userEntity = _userRepository.Add(user);

                if (userEntity == null)
                return BadRequest("FirstName and LastName required");
            
                await _userRepository.Save();

			user.UserId = userEntity.Entity.UserId;
			return Ok(user);
        }

        // PUT api/users/5
        [HttpPut()]
        public async Task<IActionResult> Put([FromBody]User user)
        {
           
				EntityEntry<User> userEntity = _userRepository.Edit(user);
				await _userRepository.Save();

			    if (userEntity == null)
				    return BadRequest("FirstName, LastName and UserId required");

            user.UserId = userEntity.Entity.UserId;
			return Ok(user);
			
        }

        // DELETE api/users/
        [HttpDelete()]
        public async Task<IActionResult> Delete([FromBody]User user)
        {
            EntityEntry<User> userEntity  = _userRepository.Delete(user);

			if (userEntity == null)
				return BadRequest("FirstName, LastName and UserId required");

            await _userRepository.Save();

            return Ok(user);
        }
    }
}
