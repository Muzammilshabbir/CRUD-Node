const config = require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blog')
const app = express();
app.use(express.urlencoded({extended: true}));

const dbUri = config.parsed.DBURI

mongoose.connect(dbUri)
    .then((result) => app.listen(config.parsed.PORT || 3000))
    .catch((err) => console.log(err))

const con = mongoose.connection

con.on('open', () => {
    console.log('connected')
})

app.use(blogRoutes)
