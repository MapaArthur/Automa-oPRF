using BackEndSIGE.Interfaces;
using BackEndSIGE.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndSIGE.Infrastructure
{
    public class EfRepository<T> : IAsyncRepository<T> where T : BaseEntity
    {
        protected readonly DatabaseContext _dbContext;
        public EfRepository(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<T>> GetAllValues()
        {
            return await _dbContext.Set<T>().ToListAsync();
        }
    }
}
