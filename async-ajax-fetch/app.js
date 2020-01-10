document.getElementById('button').addEventListener('click', loadData)

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest()

    // Open
    xhr.open('GET', 'data.txt', true)

    console.log('readyState: ', xhr.readyState)

    // Optional = can be used for spinners/loaders
    xhr.onprogress = () => (document.getElementById('credit').innerHTML = 'LOADING')

    xhr.onload = function() {
        if(this.status === 200) {
            const credit = 'Data provided by: data.txt'
            
            document.getElementById('output').innerHTML = `
                <p>Response text: ${this.responseText}</p>
            `
            document.getElementById('credit').innerHTML = `
                <p>${credit}</p>
            `
        }
    }

    // Less-good alternative to xhr.onload above
    
    // xhr.onreadystatechange = function() {
    //     console.log('readyState: ', xhr.readyState)

    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText)
    //     }
    // }

    xhr.send()

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

}