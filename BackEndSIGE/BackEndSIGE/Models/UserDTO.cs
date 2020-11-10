using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndSIGE.Models
{
    public class UserDTO : BaseEntity
    {
        public string email { get; set; }
        public string familyName { get; set; }
        public string givenName { get; set; }
        public string googleId { get; set; }
        public string imageUrl { get; set; }
        public string name { get; set; }
    }
}
