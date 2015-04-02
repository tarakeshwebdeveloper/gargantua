using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Gargantua.Api.Utilities;

namespace Gargantua.Api.Controllers
{
    public class TestController : ApiController
    {
        public CustomResponse Get()
        {
            return
                ResponseFormatter.OK(
                new List<string>(){"Value1", "Value2", "Value3"}
            );
        } 
    }
}
