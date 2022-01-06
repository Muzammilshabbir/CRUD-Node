const express = require('express');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blog')
const app = express();
app.use(express.urlencoded({extended: true}));

const dbUri = 'mongodb+srv://root:root@cluster0.4l5tq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(dbUri)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

const con = mongoose.connection

con.on('open', () => {
    console.log('connected')
})

app.use(blogRoutes)
