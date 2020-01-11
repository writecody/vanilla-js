const http = new EasyHTTP3

/**
 * All methods defined in easyhttp3.js
 */

// Call .get() method to return all users -- this method returns a Promise
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log('GET request completed: ',data))
    .catch(err => console.log('ERROR: ', err))

// Create User Data
const data = {
    name: 'Joe Coleman',
    website: 'https://www.google.com/users'
}

// Call .post() method -- also returns a Promise
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log('POST request completed: ',data))
    .catch(err => console.log('ERROR: ', err))

// .put() method --also returns a Promise
let userToUpdate = 3

http.put(`https://jsonplaceholder.typicode.com/users/${userToUpdate}`, data)
    .then(data => console.log('PUT request completed: ', data))
    .catch(err => console.log('ERROR: ', err))

// Call .delete() method -- this method returns a Promise
let userToDelete = 5

http.delete(`https://jsonplaceholder.typicode.com/users/${userToDelete}`)
    .then(data => console.log('DELETE request completed: ', data))
    .catch(err => console.log('ERROR: ', err))