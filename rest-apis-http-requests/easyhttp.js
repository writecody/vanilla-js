function easyHTTP() {
    this.http = new XMLHttpRequest()
}

// Create prototype method to make an HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true)

    // to fix scoping issues with 'this' in ES5
    let that = this

    this.http.onload = function() {
        if(that.http.status === 200) {
            callback(null, that.http.responseText)
        } else {
            callback(that.http.status)
        }
    }

    this.http.send()
}

// Create prototype method to make an HTTP POST request
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')

        // to fix scoping issues with 'this' in ES5
        let that = this

        this.http.onload = function() {
            callback(null, that.http.responseText)
        } 
        
    this.http.send(JSON.stringify(data))
}

// Create prototype method to make an HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true)
    this.http.setRequestHeader('Content-type', 'application/json')

        // to fix scoping issues with 'this' in ES5
        let that = this

        this.http.onload = function() {
            callback(null, that.http.responseText)
        } 
        
    this.http.send(JSON.stringify(data))
}

// Create prototype method to make an HTTP DELETE request
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true)

    // to fix scoping issues with 'this' in ES5
    let that = this

    this.http.onload = function() {
        if(that.http.status === 200) {
            callback(null, that.http.responseText)
        } else {
            callback(that.http.status)
        }
    }

    this.http.send()
}