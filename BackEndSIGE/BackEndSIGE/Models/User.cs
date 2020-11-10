using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BackEndSIGE.Models
{
    public class User : BaseEntity
    {
        
        public string Email { get; set; }
        public string Userid { get; set; }
        public string GivenName { get; set; }
        public string FamilyName { get; set; }
        public string Photo { get; set; }
        public string Name { get; set; }
    }
}
