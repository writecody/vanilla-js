const posts = [
    {title: 'Post One', body: 'This is post one.'},
    {title: 'Post Two', body: 'Post two here.'}
]

/*
 * VERSION 1
 */ 

// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post)
//     }, 2000)
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = ''
//         posts.forEach(function(post) {
//             output += `
//                 <li>${post.title}</li>
//             `
//         })
//         document.body.innerHTML = output
//     }, 1000)
// }

// // Create a post
// createPost({title: 'Post Three', body: 'This is the post of posts.'})

/*
 * VERSION 2: Using setTimeout to simulate asynchronous calls.
 */ 

// let count = 0

// function createPost(post, callback) {
//     console.log('post created')
//     count ++
//     console.log(count, new Date().getMilliseconds())
//     setTimeout(function() {
//         posts.push(post)
//         callback()
//     }, 2000)
// }

// function getPosts() {
//     console.log('at getPosts()')
//     count ++
//     console.log(count, new Date().getMilliseconds())
//     setTimeout(function() {
//         let output = ''
//         posts.forEach(function(post) {
//             output += `
//                 <li class="post-title">${post.title}</li>
//                 <li class="post-body">${post.body}</li>
//             `
//         })
//         document.getElementById('post-list').innerHTML = output
//     }, 1000)
// }

    // Create a post and asynchronously make sure it is added to the list of posts before they are returned. 
    // createPost() was updated to take a callback as an argument, so you pass one in when calling it. By passing getPosts in this way, we make sure that JavaScript has to wait until createPost is done before calling getPosts().

// createPost({title: 'Post Three', body: 'This is the post of posts.'}, getPosts)

// createPost({title: 'Post Four', body: 'Yet another blog post. Do blogs still exist?'}, getPosts)
// console.log('at line 54', count, new Date().getMilliseconds())

    // You do not need to call getPosts when you pass it in as a callback argument. The code will not error out but what was supposed to be a callback will run too early (it will be called).

/*
 * VERSION 3: Using Promises
 */ 

function createPost(post) {
    // Create the Promise. a Promise takes resolve (what to do when the Promise     completes successfully) and reject (what to do if there is an error)
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post)

            // Create an error to test if your reject() is working
            const error = false

            if(!error) {
                resolve()
            } else {
                reject('Error. Something went wrong.')
            }
        }, 2000)
    })
}

function getPosts() {
    setTimeout(function() {
        let output = ''
        posts.forEach(function(post) {
            output += `
                <li class="post-title">${post.title}</li>
                <li class="post-body">${post.body}</li>
            `
        })
        document.getElementById('post-list').innerHTML = output
    }, 1000)
}

createPost({title: 'Post Three', body: 'This is the post of posts.'})
    .then(getPosts)
    // if you leave out the catch block, the console will display an 'uncaught' error message
    .catch(function(err) {
        console.log(err)
    })