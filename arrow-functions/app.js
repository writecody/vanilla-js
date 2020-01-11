// const sayHello = function() {
//     console.log('Hello')
// }

// const sayHello = () => 'Hello'
// console.log(sayHello())

// wrap a returned object literal in parentheses
// const sayGoodbye = () => ({ msg: "Hello"})
// console.log(sayGoodbye())

const users = [
    'Derek',
    'Jason',
    'Anna',
    'Melissa'
]

// const nameLengths = users.map(function(name) {
//     return name.length
// })

const nameLengths = users.map(name => name.length)
console.log(nameLengths)

function showUserList(names) {
    let uiList = ''
    names.forEach(name => {
        console.log(name)
        uiList += `
        <dt>Name: ${name}<dt>
        <dd>Name length: ${name.length}</dd>
        `
    })
    document.getElementById('user-list').innerHTML = uiList
}

showUserList(users)


