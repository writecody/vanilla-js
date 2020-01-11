function easyHTTP() {
    this.http = new XMLHttpRequest()
}

// Make an HTTP GET request
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

// Make an HTTP POST request
// Make an HTTP PUT request
// Make an HTTP DELETE request