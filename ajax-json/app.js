// Create event listener for Get One Customer
document.getElementById('button1').addEventListener('click', loadCustomer)

function loadCustomer(e) {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'customer.json', true) 

    xhr.onload = function() { 
        if(this.status === 200) {
            const customer = JSON.parse(this.responseText)

            const singleCustomerInfo = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `
            document.getElementById('customer').innerHTML = singleCustomerInfo
        }
    }
    xhr.send()
}

// Create event listener to Get All Customers
document.getElementById('button2').addEventListener('click', loadAllCustomers)

function loadAllCustomers(e) {
    const xhr = new XMLHttpRequest()
    
    xhr.open('GET', 'customers.json', true)
    
    xhr.onload = function() {
        if(this.status === 200) {
            const allCustomers = JSON.parse(this.responseText)

            let output = '';

            allCustomers.forEach(function(item) {
                output += `
                <ul>
                    <li>ID: ${item.id}</li>
                    <li>Name: ${item.name}</li>
                    <li>Company: ${item.company}</li>
                    <li>Phone: ${item.phone}</li>
                </ul>
            `
            })

            document.getElementById('customers').innerHTML = output
        }
    }
    xhr.send()
}