<%@ WebHandler Language="C#" Class="getDetail" %>

using System;
using System.Web;
using Newtonsoft.Json;

public class getDetail : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        string UserID = context.Request["UserID"];

        gameapi.ITUTogelWebService ws = new gameapi.ITUTogelWebService();
        string data = ws._GetUserDetail(UserID);
        


        context.Response.Write(data);
    }








    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}