// using async returns a Promise
// async function myFunc() {
//     // create a Promise that mocks async call with setTimeout()
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000)
//     })

//     const error = false

//     if(!error) {
//         // will wait until Promise is resolved
//         const res = await promise
//         return res
//     } if(error) {
//         await Promise.reject(new Error('Something went wrong.'))
//     }

// }

// myFunc()
//     .then(response => console.log(response))
//     .catch(error => console.log(error))

async function getUsers() {
    // await the response from the fetch call to get data from the api
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    // only proceed when response Promise above is resolved
    const data = await response.json()

    // only proceed once data Promise is resolved
    return data
}

getUsers().then(list => console.log(list))