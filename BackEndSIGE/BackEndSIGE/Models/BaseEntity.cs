using System;
using System.ComponentModel.DataAnnotations;

namespace BackEndSIGE.Models
{
    public class BaseEntity
    {
        [Key]
        public int id { get; set; }
    }
}
