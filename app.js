
var url=require("url");
var fs=require("fs");
function renderHtml(path,response){
fs.readFile(path,null,function(error,data){
    if(error){
        response.writeHead(404);
        response.write("Resources are not Found")
    }else{
        response.write(data);
    }
    response.end();
})
}


   const  handleRequest=function(request,response){
        response.writeHead(200,{"Content-Tyep":"text/html"})
var path=url.parse(request.url).pathname;
switch(path){
    case "/":
 renderHtml("./index.html",response);
 break;
 case "/login":
    renderHtml("./login.html",response);
    break;
 case "/home":
    renderHtml("./index.html",response);
    
break;
default:

response.writeHead(404);
response.write("Resoources Not found");
response.end();

}
    };
   module.exports.handleRequest=handleRequest;