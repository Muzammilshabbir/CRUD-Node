const express = require('express');
const blogController = require('../controllers/blogController')

const router = express.Router();

router.get('/test', (req, res) => {

    res.send('<p>Home Page</p>')
})

// router.get('/add-blog', blogController.addBlog)
router.get('/blogs', blogController.blogs)
router.post('/save-blog', blogController.saveBlog)
router.get('/get-blog/:id', blogController.getBlog)
router.put('/update-blog/:id', blogController.updateBlog)
router.delete('/delete-blog/:id', blogController.deleteBlog)

module.exports = router;