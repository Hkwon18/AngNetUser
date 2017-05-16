using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AngNetUser.Controllers
{
    [Route("api/[controller]")] // api/DB
    public class DBController : Controller
    {
        private List<User> _userList = new List<User>
        {
            //static for now
            new User { FirstName = "Hyuk Jin", LastName = " Kwon", Email = "hyukjkwon@gmail.com", Joined = "05/01/2017"},
            new User { FirstName = "Mommy", LastName = "Kwon", Email = "Mom@bff.com", Joined = "01/01/2017"},
            new User { FirstName = "Sidney", LastName = " Crosby", Email = "SCrosby87@nhl.com", Joined = "01/01/2017"}
        };

        [HttpGet("[action]")]
        public IActionResult GetUserList()
        {
            return new ObjectResult(_userList);
        }
        [HttpPost]
        public IActionResult Post([FromBody]User user)
        {
            _userList.Add(user);
            return new ObjectResult(_userList);
        }
        
    }

    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Joined { get; set; }
    }
}
