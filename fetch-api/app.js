// These call the non-arrow functions below
document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJson)
document.getElementById('button3').addEventListener('click', getApiData)

// Get local text file data
// function getText() {
//     // invoke fetch, pass in the location of the data we want to get
//     fetch('test.txt')
//         // fetch() returns a Promise. Use .then() to add a callback of what to do with the data after it is fetched.
//         .then(function(response) {
//             // We want response.text() returned because we are getting text data. If it were JSON data we would want to return response.json()
//             return(response.text())
//         })
//         // .then() returns a Promise. Chain a .then() to do something with what is returned.
//         .then(function(data) {
//             console.log(data)
//             document.getElementById('output').innerHTML = data
//         })
//         // Catch an error
//         .catch(function(err) {
//             console.log(err)
//         })
// }

// Get local text file data same as above, but converting chained methods to use arrow functions
function getText2() {
    // invoke fetch, pass in the location of the data we want to get
    fetch('test.txt')
        .then(response => response.text()) 
        .then(data => document.getElementById('output').innerHTML = data) 
        .catch(err => console.log(err)) 
}

// Get local JSON data
// function getJson() {
//     fetch('posts.json')
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(data) {
//             let returnedData = ''
//             data.forEach(function(post) {
//                 returnedData += `
//                     <dt>${post.title}</dt>
//                     <dd>${post.body}</dd>
//                 `
//             });
//             document.getElementById('jsonOutput').innerHTML = returnedData
//         })
//         .catch(function(err) {
//             console.log(err)
//         })
// }

// Get local JSON file data same as above, but converting chained methods to use arrow functions
function getJson2() {
    fetch('posts.json')
        .then(response => response.json()) 
        .then(data => {
            let returnedData = ''
            data.forEach(function(post) {
                returnedData += `
                    <dt>${post.title}</dt>
                    <dd>${post.body}</dd>
                `
            }) 
        document.getElementById('jsonOutput').innerHTML = returnedData
        })
        .catch(err => console.log(err)) 
}

// Get API Data
// function getApiData() {
//     fetch('https://api.github.com/users')
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(users) {
//             let userList = ''
//             users.forEach(function(user) {
//                 if(user.id < 5) {
//                     userList += `
//                         <dt>Username: ${user.login}</dt>
//                         <dd>ID: ${user.id}</dd>
//                         <dd>URL: ${user.url}</dd>
//                     `
//                 }
//                 document.getElementById('apiOutput').innerHTML = userList
//             })
//         })
//         .catch(function(err){
//             console.log('Here is your error: ', err)
//         }) 
// }

// Get API data same as above, but converting chained methods to use arrow functions
function getApiData2() {
    fetch('https://api.github.com/users')
        .then(response => response.json()) 
        .then(users => {
            let userList = ''
            users.forEach(function(user) {
                if(user.id < 5) {
                    userList += `
                        <dt>Username: ${user.login}</dt>
                        <dd>ID: ${user.id}</dd>
                        <dd>URL: ${user.url}</dd>
                    `
                }
                document.getElementById('apiOutput').innerHTML = userList
            })
        })
        .catch(err => console.log('Here is your error: ', err)) 
}