const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const Blog = require('./models/blog');
//express app
const app = express();

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('public'));
app.use(morgan('dev'));


// MongoDB connection
mongoose.connect('mongodb+srv://netninja:databaseforblogs@nodetuts.kodzypo.mongodb.net/?retryWrites=true&w=majority')
.then((result) => app.listen(3000, () =>{
    console.log(`Server is running on port 3000`);
                }))
.catch((err) => console.log(err));

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog 2',
        body: 'more about my new blog 2'
    });

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});

app.get('/single-blog', (req, res) => {
    Blog.findById('654fa228f94b358bbaa99266')
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})

app.get('/', (req, res) => {
    // res.send('<p>Home page</p>');
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum delor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum delor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum delor sit amet consectetur'},
    ];
    res.render('index', {title: 'Home', blogs});
})

app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    res.render('about', {title: 'About'});


})


app.get('/create', (req, res) =>{
    res.render('create', {title: 'Create'});
})

//404 page
app.use((req, res) =>{
    res.status(404).render('404page', {title: '404'});
})

