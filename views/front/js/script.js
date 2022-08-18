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

const postListHome = document.querySelector('#home-posts');
const postListDash = document.querySelector('#dash-posts');




const printPosts = async (posts) => {
    let renderedPosts = await posts.json();

    // if (window.location.pathname === '/index') {
        postList.forEach((post) => { post.innerHTML = ''})
    // }

    let postListPosts = [];

    const buildPost = (title, author, date, post) => {
        const postBox = document.createElement('div');
        postBox.classList.add('posting');
        postList.append(postBox);


        const homeDash = ` 
        <div class="post-heading">
            <h3 class="post-title">${title}</h3>
            <p class="post-author">${author}</p>
            <p class="post-date">${date}</p>
        </div>
            <p class="post-text">${post}</p> 
            `;

        const userDash = `
        <div class="edit-post">
            <button class="update-btn">Update Post</button>
            <button class="delete-btn">Delete Post</button>
        </div>
        `;

        const authHome = `
        <form action="" class="comment">
            <textarea class="comment-here" placeholder="Comment here"></textarea>
            <button class="comment-btn">Comment</button>
        </form>
        `;


        //But also manage Index vs Dashboard
        if (userId === author.id && window.location.pathname === '/dashboard') {
            postBox.innerHtml = homeDash + userDash + authHome;
        } else if (blogger) {
            postBox.innerHTML = homeDash + authHome;
        } else {
            postBox.innerHTML = homeDash;
        }

        // postBox.innerHTML = ` 
        // <div class="post-heading">
        //     <h3 class="post-title">${title}</h3>
        //     <p class="post-author">${author}</p>
        //     <p class="post-date">${date}</p>
        // </div>
        //     <p class="post-text">${post}</p> 
        // {{#if blogger}}
        // <div class="edit-post">
        //     <button class="update-btn">Update Post</button>
        //     <button class="delete-btn">Delete Post</button>
        // </div>
        // {{/if}}
        // {{#if blogger}}
        // <form action="" class="comment">
        //     <textarea class="comment-here" placeholder="Comment here"></textarea>
        //     <button class="comment-btn">Comment</button>
        // </form>
        // {{/if}}
        //     `
    





        const updateBtn = document.querySelector('.update-btn');
        const deleteBtn = document.querySelector('.delete-btn');
        const commentSubmit = document.querySelector('.comment-btn');

        // const postHeading = document.createElement('div');
        // postHeading.classList.add('post-heading');
        
        // const postTitle = document.createElement('h3');
        // postTitle.classList.add('post-title');
        // postTitle.textContent = title;
    
        // const postAuthor = document.createElement('p');
        // postAuthor.classList.add('post-author');
        // postAuthor.textContent = author;
    
        // const postDate = document.createElement('p');
        // postDate.classList.add('post-date');
        // postDate.textContent = date;
    
        // postHeading.append(postTitle);
        // postHeading.append(postAuthor);
        // postHeading.append(postDate);
    
        // const postBody = document.createElement('p');
        // postBody.classList.add('post-text');
        // postBody.textContent = post
        
        // postBox.append(postHeading);
        // postBox.append(postBody);

        // const postEdit = document.createElement('div')
        // postEdit.classList.add('edit-post')

        
        // const updateBtn = document.createElement('button')
        // updateBtn.classList.add('update-btn')
        // updateBtn.innerHTML = 'Update Post';
        // postEdit.append(updateBtn);
        updateBtn.addEventListener('click', updatePostFunc)

        // const deleteBtn = document.createElement('button');
        // deleteBtn.classList.add('delete-btn');
        // deleteBtn.innerHTML = 'Delete Post';
        // postEdit.append(deleteBtn)
        deleteBtn.addEventListener('click', deletePostFunc)
        
        // postBox.append(postEdit);


        // const commentForm = document.createElement('form')
        // commentForm.classList.add('comment')
        // // commentForm.setAttribute('action', '')

        // const commentBox = document.createElement('input')
        // commentBox.classList.add('comment-here');
        // // commentBox.innerHTML = 'blah'
        // commentForm.append(commentBox);

        // const commentSubmit = document.createElement('button')
        // commentSubmit.classList.add('comment-btn');
        // commentSubmit.innerHTML = 'Comment'
        // commentForm.append(commentSubmit);
        commentSubmit.addEventListener('click', )

        // postBox.append(commentForm);

        

        
        return postBox;
    }






    








    renderedPosts.forEach((post) => {
        const block = buildPost(post.title, post.author, post.date, post.body);
        block.dataset.post = JSON.stringify(post);

        postListPosts.push(block);
    })

    postListPosts.forEach((post) => postList.append(post))

}



//separate function to add buttons needed on Dashboard: Update / Delete Post ?

function printComments(comments) {

    let renderedcomments = await comments.json();

    // if (window.location.pathname === '/index') {
        postBox.forEach((comment) => { comment.innerHTML = ''})
    // }

    let commentListComments = [];


const buildComments = (comment, comauthor, comdate) => {

    const postComments = document.createElement('div');
    postComments.classList.add('listed-comments');

    // postComments.innerHTML = `
    //     <p class="comment-body">${comment}</p>
    //     <div class="comment-heading">
    //         <h4 class="commentor">${comauthor}</h4>
    //         <p class="comment-date">${comdate}</p>
    //     </div>
    //     <div class="comment-edit">
    //         <button class="edit-com">Edit Comment</button>
    //         <button class="del-com">Delete Comment</button>
    //     </div>
    // `;

    const postedComments = `
    <p class="comment-body">${comment}</p>
    <div class="comment-heading">
        <h4 class="commentor">${comauthor}</h4>
        <p class="comment-date">${comdate}</p>
    </div>
    `;

    const manageComments = `
    <div class="comment-edit">
        <button class="edit-com">Edit Comment</button>
        <button class="del-com">Delete Comment</button>
    </div>

    `

    if (userId === comauthor.id) {
        postComments.innerHTML = postedComments + manageComments;
    } else {
        postComments.innerHTML = postedComments;
    }




    const comUpdate = document.querySelector('.edit-com');
    const comDel = document.querySelector('.del-com')


    postBox.append(postComments);
    // const commentBody = document.createElement('p');
    // commentBody.classList.add('comment-body');
    // commentBody.textContent = comment;

    // const commentFooter = document.createElement('div');
    // commentFooter.classList.add('comment-heading');

    // const commentAuthor = document.createElement('h4')
    // commentAuthor.classList.add('commentor')
    // commentAuthor.textContent = comauthor;
    // commentFooter.append(commentAuthor);

    // const commentDate = document.createElement('p')
    // commentDate.classList.add('comment-date');
    // commentDate.textContent = comdate;
    // commentFooter.append(commentDate);

    // const commentEdit = document.createElement('div')
    // commentEdit.classList.add('comment-edit')


    // const comUpdate = document.createElement('button');
    // comUpdate.classList.add('edit-com')
    comUpdate.addEventListener('click', updateCommentFunc)
    // commentEdit.append(comUpdate);

    // const comDel = document.createElement('button');
    // comDel.classList.add('del-com')
    comDel.addEventListener('click', deleteCommentFunc)
    // commentEdit.append(comDel);


    // postComments.append(commentBody);
    // postComments.append(commentFooter);
    // postComments.append(commentEdit);


    //Add conditional statement: if commentator iD = userID, then show edit/delete comment



    return postComments
}

renderedcomments.forEach((comment) => {
    const coms = buildComments(comment.body, comment.author, comment.date);
    coms.dataset.comment = JSON.stringify(comment);

    commentListComments.push(coms);
})

commentListComments.forEach((comment) => {
    if (comment.id === blogpost.comments.id) {
    postBox.append(comment)
    }
})

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
            //if userID = authorID, render posts
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
