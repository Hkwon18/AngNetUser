using Microsoft.AspNetCore.Mvc;

namespace AngNetUser.Controllers
{
    [Route("api/[controller]")] // api/DB
    public class DBController : Controller
    {
        private static User[] _userList = new User[]
        {
            //static for now
            new User { Name = "Hyuk Jin Kwon", Email = "hyukjkwon@gmail.com", Joined = "May 13, 2017"},
            new User { Name = "Mommy", Email = "Mom@bff.com", Joined = "Jan 1, 2017"},
            new User { Name = "Sidney Crosby", Email = "SCrosby87@nhl.com", Joined = "April 27, 2017"}
        };

        [HttpGet("[action]")]
        public IActionResult GetUserList()
        {
            return new ObjectResult(_userList);
        }
    }

    public class User
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Joined { get; set; }
    }
}
