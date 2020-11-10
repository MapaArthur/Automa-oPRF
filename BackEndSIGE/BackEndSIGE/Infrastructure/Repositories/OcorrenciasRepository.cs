using BackEndSIGE.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEndSIGE.Infrastructure.Repositories
{
    public class OcorrenciasRepository : EfRepository<Ocorrencias>
    {
        public OcorrenciasRepository(DatabaseContext databaseContext) : base(databaseContext) { }

        public void Insert(Ocorrencias user)
        {
            _dbContext.Ocorrencias.Add(user);
        }

        public Task<Ocorrencias> GetById(int id)
        {
            return _dbContext.Ocorrencias.Where(sa => sa.id == id).FirstAsync();
        }

        public Task<List<Ocorrencias>> GetAll()
        {
            return _dbContext.Ocorrencias.OrderBy(u => u.ocorrencia).Take(30).ToListAsync();
        }
    }
}
