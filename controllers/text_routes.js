const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const {v4 : uuidv4} = require('uuid');
const { BlogPost } = require('../models');


const db_path = path.join(__dirname, '');


//Functions to READ FROM / WRITE TO Blog Post Database
function retrievePosts() {
    BlogPost.findAll()
        .then((posts) => {
            return fs.promises.readFile(db_path, 'utf-8')
                .then(posts => JSON.parse(posts))
        })
}

function addPost(post_text) {
    return fs.promises.writeFile(db_path, JSON.stringify(post_text, null, 2))
}

//Functions to READ FROM / WRITE TO Comment Database
function retrieveComments() {
    return fs.promises.readFile(db_path, 'utf-8')
        .then(comments => JSON.parse(comments))
}

function addComment(comment_text) {
    return fs.promises.writeFile(db_path, JSON.stringify(comment_text, null, 2))
}


//READ blog posts from database
router.get('/api/posts', (req, res) => {
    retrievePosts()
        .then(posts => {
            res.json(posts);
        })
        .catch(err => console.log(err));
})


//Save new blog posts to database
router.post('/api/dashboard', (req, res) => {
    retrievePosts()
    .then(posts => {
        const new_post = req.body;
            new_post.id = uuidv4();
            posts.push(new_post);

            addPost(posts)
                .then(() => res.json(posts))
                .catch(err => console.log(err));
            })
        });


router.delete('/api/dashboard/:id', (req, res) => {
    retrievePosts()
        .then(posts_remain => {
            const id = req.params.id;
            posts_remain = posts_remain.filter((post) => post.id !== id)

            addPost(posts_remain)
                .then(() => res.json(posts_remain))
                .catch(err => console.log(err));
        })
});

router.put('/api/dashboard/:id', (req, res) => {

})


/******************
 COMMENTS
 ******************/

//View Comments
router.get('/api/comments', (req, res) => {
    retrieveComments()
        .then(comments => {
            res.json(comments);
        })
        .catch(err => console.log(err));
})

//Save new blog comment to database
router.post('/api/comments', (req, res) => {
    retrieveComments()
        .then(posts => {
            const new_post = req.body;
            new_post.id = uuidv4();
            posts.push(new_post);

            addComment(posts)
                .then(() => res.json(posts))
                .catch(err => console.log(err));
        })
});


module.exports = router;