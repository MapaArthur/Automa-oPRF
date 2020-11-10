using BackEndSIGE.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndSIGE.Infrastructure.Repositories
{
    public class UserRepository : EfRepository<User>
    {
        public UserRepository(DatabaseContext databaseContext) : base(databaseContext) { }

        public Task<User> GetById(int id)
        {
            return _dbContext.User.Where(sa => sa.id == id).FirstAsync();
        }

        public void Insert(User user)
        {
            _dbContext.User.Add(user);
        }
    }
}
