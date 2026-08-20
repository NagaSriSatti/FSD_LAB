const express = require('express');
const app = express()
const PORT = 3000
app.get('/',(req,res) => {
    res.send(`<h1>Welcome SVECW!</h1><p>You have reached th ehome page.</p>`);
});
app.get('/about',(req,res) => {
    res.send(`THis server was built as a learining exercise for express.js by SVECW AI department.`);
});
app.get('/api/status',(req,res) => {
    res.json({
        active : true,
        version : '1.0.0',
        message : "The server is healthy and responding!"
    });
});
app.listen(PORT,() => {
    console.log(`Success! Server is running at http://localhost:${PORT}`);
    console.log(`Press ctrl + c to stop the server`);
})