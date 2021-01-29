const connect=require('connect');
const app=connect();

const helloWorld= function(req,res,next) {
    res.setHeader("Content-type",'text/plain');
    res.end("Hello World");
}


app.use(helloWorld);
app.listen(3000);
console.log("Sever running!");