const express = require('express');
const app = express();
app.use('/', function(req,res) {
    res.send('Hello World')
});
app.listen(3001);
console.log("Server runnin!");
module.exports = app;