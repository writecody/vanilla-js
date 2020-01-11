class EasyHTTP3 {
    // Define a method to make an HTTP GET request
    // Instead of returning new Promise instances, use async/await
    async get(url) {
        const getResponse = await fetch(url)

        const resData = await getResponse.json()

        return resData
    }

    // Define a method to make an HTTP POST request
    async post(url, data) {
        const postResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            
        // waits for response to return data
        const resData = await postResponse.json()
    
        return resData
        }
    

    // Define a method to make an HTTP PUT request
    async put(url, data) {
        const putResponse = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        
        const resData = await putResponse.json()

        return resData
    }

    // Define a method to make an HTTP DELETE request
    async delete(url) {
        const deleteResponse = await fetch(url)

        const resData = await deleteResponse.json()

        return resData
    }
}
