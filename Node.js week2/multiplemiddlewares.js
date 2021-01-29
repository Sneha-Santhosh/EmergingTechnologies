const connect=require('connect');
const app=connect();
const logger = function(req,res,next) {
    console.log(req.method, req.url);
    next();
}
const helloWorld= function(req,res,next) {
    res.setHeader("Content-type",'text/plain');
    res.end("Hello World");
}

app.use(logger);
app.use(helloWorld);
app.listen(3000);
console.log("Sever running!");