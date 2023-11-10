const express = require('express');
//express app
const app = express();

app.set('view engine', 'ejs');

//listen for requests

app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Home page</p>');
    const blogs = [
        // {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum delor sit amet consectetur'},
        // {title: 'Mario finds stars', snippet: 'Lorem ipsum delor sit amet consectetur'},
        // {title: 'How to defeat bowser', snippet: 'Lorem ipsum delor sit amet consectetur'},
    ];
    res.render('index', {title: 'Home', blogs});
})

app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    res.render('about', {title: 'About'});


})

//redirect

app.get('./blogs/create', (req, res) =>{
    res.render('create', {title: 'Create'});
})

//404 page
app.use((req, res) =>{
    res.status(404).render('404page', {title: '404'});
})