using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngNetUser.Models
{
    [System.ComponentModel.DataAnnotations.Schema.Table("Users")]
    public class User
    {
        [System.ComponentModel.DataAnnotations.Key]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Joined { get; set; }
        public int Age { get; set; }
    }
}
