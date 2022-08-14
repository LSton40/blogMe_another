const { update } = require("../../../models/Blogger");





const grabPosts = () => 
    fetch('api/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });


const savePosts = (post) => 
fetch('api/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(post)
});

const deletePost = (id) =>
fetch(`/api/posts/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

// const updatePost = (id, post) =>
// fetch(`/api/posts/${id}`, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(post)
// })



const grabComments = () => 
fetch('api/comments', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

const saveComment = (comment) => 
fetch('api/comments', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(comment)
});

const deleteComment = (id) =>
fetch(`/api/comments/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

// const updateComment = (id, comment) =>
// fetch(`/api/comments/${id}`, {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(comment)
// })

// let allPosts;

const postList = document.querySelector('.prev-posts');
// const postList = document.querySelector('#dashboard-posts');




function printPosts(posts) {
    let renderedPosts = posts.json();

    // if (window.location.pathname === '/index') {
        postList.forEach((post) => { post.innerHTML = ''})
    // }

    let postListPosts = [];


    const postBox = document.createElement('div');
    postBox.classList.add('posting');
    postList.append(postBox);

    const postHeading = document.createElement('div');
    postHeading.classList.add('post-heading');
    
    const postTitle = document.createElement('h3');
    postTitle.classList.add('post-title');
    postTitle.textContent = title;

    const postAuthor = document.createElement('p');
    postAuthor.classList.add('post-author');
    postAuthor.textContent = author;

    const postDate = document.createElement('p');
    postDate.classList.add('post-date');

    postHeading.append(postTitle);
    postHeading.append(postAuthor);
    postHeading.append(postDate);

    const postBody = document.createElement('p');
    postBody.classList.add('post-text');
    
    postBox.append(postHeading);
    postBox.append(postBody);


    const postEdit = document.createElement('div')
    postEdit.classList.add('edit-post')

    const updateBtn = document.createElement('button')
    updateBtn.classList.add('comment-btn')
    postEdit.append(updateBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    postEdit.append(deleteBtn)

    postBox.append(postEdit);





    // const commentOption = document.createElement('div');
    // commentOption.classList.add('comment');

    const commentForm = document.createElement('form')
    // commentForm.classList.add('blah')
    // commentForm.setAttribute('action', '')

    const commentBox = document.createElement('input')
    commentBox.classList.add('comment-here');
    // commentBox.innerHTML = 'blah'
    commentForm.append(commentBox);

    const commentSubmit = document.createElement('button')
    commentSubmit.classList.add('comment-btn');
    commentForm.append(commentSubmit);

    postBox.append(commentForm)

}


function printComments(comments) {


    const postComments = document.createElement('div');
    postComments.classList.add('listed-comments');

    const commentBody = document.createElement('p');
    commentBody.classList.add('comment-body');

    const commentFooter = document.createElement('div');
    commentFooter.classList.add('comment-heading');

    const commentAuthor = document.createElement('h4')
    commentAuthor.classList.add('commentor')
    commentAuthor.textContent = cAuthor;
    commentFooter.append(commentAuthor);

    const commentDate = document.createElement('p')
    commentDate.classList.add('comment-date')
    commentFooter.append(commentDate);


    postComments.append(commentBody);
    postComments.append(commentFooter);


}



//Home Page Post Interface
function showPostDetailsHome() {
    //default display on home page: title only? First 2 lines of body?, collapsible

    //on click body of post, shows full text body and all comments
    //shows options to add comments, only if logged in
    //Can comment on anyone's posts

    //shows options to update or delete user's OWN comments on any post

    grabPosts()
        .then((posts) => {
            printPosts(posts)
        })
            .then(() => {
                grabComments()
            })
                .then((comments) => {
                    printComments(comments)
                })

}



function showOwnPostDetailsDash() {
    //displays only user's own posts in default display (title only? Or first 2 lines)

    //on click of body, shows full text body and all comments
    //shows option to add Comment
    //shows option to Update or Delete Post

    //On click of a comment on own post, option to Delete

    grabPosts()
        .then(() => {
            //render posts
        })
        .then(() => {
            grabComments()
        })
        .then(() => {
            //render comments
        })

}








function showPostInterface() {
    //display form and button for creating a new post
    

    //.display = "flex"
}

function newPostSave() {
    //adds new div with Title, Author, Date, Text Body
    //also adds Update Post and Delete Post buttons
    //also adds Add Comment button

    savePosts()
        .then(() => {
            //render note with buttons
        })
}


function addCommentInterface() {
    //shows text box to add comment
    //shows Save Comment button

    //.display = "flex"
}

function newCommentSave() {
    //adds new div with text body and author, date
    //also adds Update Comment and Delete Comment buttons

    saveComment()
        .then(() => {
            //render comment with update and delete buttons - user restricted
        })
}


function deletePostFunc() {
    //Deletes post from database
    //Deletes div from HTML

    deletePost()
        .then(() => {
            showOwnPostDetailsDash()
        })
}

function deleteCommentFunc() {
    //Deletes comment from database
    //Deletes div from HTML

    deleteComment()
        .then(() => {
            showPostDetailsHome();
            showOwnPostDetailsDash();
        })
}






function updatePostFunc() {
    //shows editable form input for Title and Textbody, with Title and Textbody filled
    //Show Save update button

    //get by id; create text boxes with text matching id number of target
    //.display = "flex"

}

function savePostUpdate() {

    // updatePost()
    //     .then(() => {
    //         showOwnPostDetailsDash();
    //     })

}

function updateCommentFunc() {
    //shows editable form input for textbody, filled
    //Show Save update button

    //get by id; create text boxes with text matching id number of target
    //.display = "flex"
}

function saveCommentUpdate() {

    // updateComment()
    //     .then(() => {
    //         showPostDetailsHome();
    //         showOwnPostDetailsDash();
    //     })

}



/*****************************************
 BUTTONS CREATED UPON POST / COMMENT CREATION
 *********************************************/

//Add Delete and Update buttons to new post
const postDel = document.createElement('button');
// postDel.classList.add()
postDel.addEventListener('click', deletePostFunc)

.append(postDel)

const postUpdate = document.createElement('button');
// postUpdate.classList.add()
postUpdate.addEventListener('click', updatePostFunc)

.append(postUpdate)





//Add Delete and Update buttons to new comment
const comDel = document.createElement('button');
// comDel.classList.add()
comDel.addEventListener('click', deleteCommentFunc)

.append(comDel)

const comUpdate = document.createElement('button');
// comUpdate.classList.add()
comUpdate.addEventListener('click', updateCommentFunc)

.append(comUpdate)





//Hidden or only exist when select Update
const savePostUpdateBtn = document.querySelector('');
savePostUpdateBtn.addEventListener('click', savePostUpdate);


const saveComUpdateBtn = document.querySelector('');
saveComUpdateBtn.addEventListener('click', saveCommentUpdate)







//Add new Post button
const addPost = document.querySelector('.add-btn');
const createPost = document.querySelector('#create-post');


addPost.addEventListener('click', showPostInterface)
createPost.addEventListener('click', newPostSave)






// const = loginBtn = document.querySelector('#login-btn')
// const = regBtn = document.querySelector('#register-btn')
// loginBtn.addEventListener('click', )
// regBtn.addEventListener('click', )
