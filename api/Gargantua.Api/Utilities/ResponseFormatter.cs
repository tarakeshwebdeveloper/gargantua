using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Gargantua.Api.Utilities
{
    public class CustomResponse{
        public int code = 200;
        public string Message = "OK";
        public object Model = null;
    }
    public static class ResponseFormatter
    {
        public static CustomResponse OK(object model)
        {
            CustomResponse res = new CustomResponse();
            res.Model = model;
            return res;
        }
    }
}