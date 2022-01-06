const Blog = require('../models/blog');

// const addBlog = (req, res) => {

//     const blog = new Blog({
//         title: "2 tile",
//         body: "2 bodu",
//         description: "2 descriptionle"
//     });

//     blog.save().then((result) => {
//         console.log(req);
//         res.send(result)
//     })
// }

const saveBlog = async (req, res) => {

    const blog = new Blog(req.body)
    try {
        const result = await blog.save()
        res.status(201).send(result)
    }
    catch (err) {
        console.error(err)
    }
}

const blogs = async (req, res) => {

    try {
        const blogs = await Blog.find()

        res.status(200).send(blogs)
    }
    catch (err) {
        console.error(err)
    }
}

const getBlog = async (req, res) => {

    const blog = await Blog.findById(req.params.id);
    res.status(200).send(blog)
}
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        blog.title = req.body.title
        blog.body = req.body.body
        blog.description = req.body.description
        const updatedBlog = await blog.save()
        res.status(200).send(updatedBlog)
    }
    catch (err) {
        console.error(err)
    }
}

const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)
        res.status(200).send({ success: true, message: 'Blog Deleted Successfully' })
    } catch (err) {
        console.error(err)
    }
}

module.exports = { saveBlog, blogs, getBlog, updateBlog, deleteBlog }