using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEndSIGE.Infrastructure;
using BackEndSIGE.Infrastructure.Repositories;
using BackEndSIGE.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackEndSIGE.Controllers
{
    [Route("api/")]
    [ApiController]
    [EnableCors("MyPolicy")]
    public class UserController : ControllerBase
    {
        private readonly DatabaseContext _databasecontext;
        private readonly UserRepository _userRepository;
        private readonly OcorrenciasRepository _ocorrenciaRepository;

        public UserController(DatabaseContext databasecontext, UserRepository userRepository, OcorrenciasRepository ocorrenciaRepository)
        {
            _databasecontext = databasecontext;
            _userRepository = userRepository;
            _ocorrenciaRepository = ocorrenciaRepository;
        }
        // GET: api/<UserController>
        [HttpGet]
        [Route("User")]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UserController>
        [Route("User/CreateUser")]
        [HttpPost("{UserDTO}")]
        public int CreateUser([FromBody] UserDTO userDTO)
        {
            var newUser = new User
            {
                Email = userDTO.email,
                FamilyName = userDTO.familyName,
                GivenName = userDTO.givenName,
                Name = userDTO.name,
                Photo = userDTO.imageUrl,
                Userid = userDTO.googleId
            };

            _userRepository.Insert(newUser);
            var retorno =  _databasecontext.SaveChanges();
            return retorno; 
        }

        [HttpGet]
        [Route("ocorrencia")]
        public Task<List<Ocorrencias>> GetOcorrencia()
        {
            return _ocorrenciaRepository.GetAll();
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
