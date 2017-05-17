using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using AngNetUser.Models;
using AngNetUser.Context;

namespace AngNetUser.Controllers
{
    [Route("api/[controller]")] // api/DB
    public class DBController : Controller
    {
        UserContext db = new UserContext();

        [HttpGet("[action]")]
        public IActionResult GetUserList()
        {
            db.Database.EnsureCreated();
            return new ObjectResult(db.Users);
        }
        [HttpPost("[action]")]
        public IActionResult AddUser([FromBody]User user)
        {
            bool exists = db.Users.Any(
                element => element.FirstName == user.FirstName &&
                element.LastName == user.LastName &&
                element.UserName == user.UserName &&
                element.Email == user.Email);

            if (!exists)
            {
                user.Joined = DateTime.Now.ToString();
                db.Users.Add(user);
                db.SaveChanges();
                return new ObjectResult(db.Users);
            }
            return BadRequest();
        }   
    }

}
