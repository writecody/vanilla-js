const http = new easyHTTP

// Get posts
http.get('https://jsonplaceholder.typicode.com/posts', 
    // passing in a callback
    function(err, posts) {
        if(err) {
            console.log('Error: ', err)
        } else {
            console.log(posts)
        }
})