using BackEndSIGE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndSIGE.Interfaces
{
    public interface IAsyncRepository<T> where T : BaseEntity
    {
        Task<List<T>> GetAllValues();
    }
}
