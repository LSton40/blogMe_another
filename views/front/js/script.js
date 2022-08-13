




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











//Home Page Post Interface
function showPostDetailsHome() {
    //default display on home page: title only? First 2 lines of body?, collapsible

    //on click body of post, shows full text body and all comments
    //shows options to add comments, only if logged in
    //Can comment on anyone's posts

    //shows options to update or delete user's OWN comments on any post
}



function showOwnPostDetailsDash() {
    //displays only user's own posts in default display (title only? Or first 2 lines)

    //on click of body, shows full text body and all comments
    //shows option to add Comment
    //shows option to Update or Delete Post

    //On click of a comment on own post, option to Delete
}








function showPostInterface() {
    //display form and button for creating a new post
}

function newPostSave() {
    //adds new div with Title, Author, Date, Text Body
    //also adds Update Post and Delete Post buttons
    //also adds Add Comment button
}


function addCommentInterface() {
    //shows text box to add comment
    //shows Save Comment button
}

function newCommentSave() {
    //adds new div with text body and author, date
    //also adds Update Comment and Delete Comment buttons
}


function deletePostFunc() {
    //Deletes post from database
    //Deletes div from HTML
}

function deleteCommentFunc() {
    //Deletes comment from database
    //Deletes div from HTML
}



function updatePostFunc() {
    //shows editable form input for Title and Textbody, with Title and Textbody filled
    //Show Save update button
}

function savePostUpdate() {

}

function updateCommentFunc() {
    //shows editable form input for textbody, filled
    //Show Save update button
}

function saveCommentUpdate() {

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
