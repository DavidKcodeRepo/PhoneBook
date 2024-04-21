using Microsoft.AspNetCore.Mvc;
using PhoneBook.Models;

namespace PhoneBook.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PhoneBookController : ControllerBase
    {
        public PhoneBookController()
        {
        }

        [HttpGet]
        public List<PhoneBookEntry> Get()
        {
            throw new NotImplementedException();
        }

        [HttpGet(template:"{id}")]
        public PhoneBookEntry Get(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public void Post([FromBody] PhoneBookEntry entry)
        {
            throw new NotImplementedException();
        }

        [HttpPut(template:"{id}")]
         
    }
}