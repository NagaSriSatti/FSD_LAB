const express = require('express')
const app = express()
const PORT = 3000
app.get('/user/:id',(req,res) => {
    const userid = req.params.id;
    res.send(`<p>You are viewing profile of <strong>${userid}</strong></p>`)
});
app.get('/user/:from/:to',(req,res) => {
    const {from,to} = req.params;
    res.send(`<p>Searching for <strong>${to}</strong> from <strong>${from}</strong></p>`)
});
app.get('/search',(req,res) => {
    const category = req.query.category;
    const sort = req.query.sort;
    res.json({
        message : "Search",
        filteringBy : category || "None",
        sortingBy : sort || "Default"
    });
});
app.listen(PORT , () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});