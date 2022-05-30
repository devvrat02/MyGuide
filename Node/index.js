const express = require('express');
const app = express();
const fs = require("fs");
const func = require("./data");

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./routes/api/users'))


app.use('/api/chat',require('./routes/chatapi/chat'))


var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://localhost:%s", port)
})