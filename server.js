const express = require('express')
const app = express()
const PORT = 8080
const HOST = '0.0.0.0';

app.set('view engine', 'ejs')



const user = {
    firstName: 'Node',
    lastName: 'Ninja',
}

app.get('/', (req, res) => {
    res.render('pages/index', {
        user,
        title: "Home Page"
    })
})

app.get('/page', (req,res) => {
    res.render('pages/page', {
        ...req.query,
        title: "Page"
    });
})



app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: "About"
    })
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

