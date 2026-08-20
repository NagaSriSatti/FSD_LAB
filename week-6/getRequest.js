const express = require('express')
const app = express();
const PORT = 3000
app.get('/',(req,res) => {
    res.json({
        message : "Welcome to API",
        status : "active",
        timestamp : new Date()
    });
});

app.get('/ships',(req,res) => {
    const shipsList = [
        {id : 101,name : "Alice",color: "red"},
        {id : 102,name : "Bob",color: "blue"},
        {id : 103,name : "Charlie",color: "green"}
    ];
    res.json(shipsList);
});

app.get('/product/:id',(req,res) => {
    const productId = req.params.id;
    res.json({
        requestedId : productId,
        category: "Electronics",
        inStock : true,
        tags : ["gadget","new_arrival"]
    });
});
app.listen(PORT,() => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
})