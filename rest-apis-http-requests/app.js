const http = new easyHTTP

// Get posts using your http object's GET method and the correct endpoint provided by the API
// http.get('https://jsonplaceholder.typicode.com/posts', 
//     // passing in a callback
//     function(err, posts) {
//         if(err) {
//             console.log('Error: ', err)
//         } else {
//             console.log(posts)
//         }
// })

// Get a single post using your http object's GET method and the correct endpoint provided by the API
// http.get('https://jsonplaceholder.typicode.com/posts/10', 
//     // passing in a callback
//     function(err, post) {
//         if(err) {
//             console.log('Error: ', err)
//         } else {
//             console.log(post)
//         }
// })

// Create data
const data = {
    userId: 54,
    title: 'Custom post',
    body: 'This is a custom post.'
}

// Create a post using your http object's POST method and the correct endpoint provided by the API
// http.post('https://jsonplaceholder.typicode.com/posts/', data,
//     function(err, post) {
//         if(err) {
//             console.log(err)
//         } else {
//             console.log(post)
//         }
//     })

// Update a post using your http object's PUT method and the correct endpoint provided by the API
// http.put('https://jsonplaceholder.typicode.com/posts/42', data, 
//     function(err, post) {
//         if(err) {
//             console.log(err)
//         } else {
//             console.log('Post Updated: ', post)
//         }
// }) 

// Delete a single post using your http object's DELETE method and the correct endpoint provided by the API
http.delete('https://jsonplaceholder.typicode.com/posts/7', 
    // passing in a callback
    function(err, post) {
        if(err) {
            console.log('Error: ', err)
        } else {
            console.log('Post deleted. Post content: ', post)
        }
})