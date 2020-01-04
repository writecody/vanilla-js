// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // create a <tr> element
    const row = document.createElement('tr');
    // insert columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td class="delete">X</td>
    `;

    // add book to list
    list.appendChild(row);
}

UI.prototype.showAlert = function(msg, cssClass) {
    // create the element
    const div = document.createElement('div');
    div.className = `alert ${cssClass}`
    div.appendChild(document.createTextNode(msg));
    // get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    
    // insert alert into DOM
    container.insertBefore(div, form);

    // set timeout to remove alert after 3 sec.
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

// delete book from list
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

// clear input fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event listener for add event
document.getElementById('book-form').addEventListener('submit', function(e) {
    // get form values
    const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value


    // instantiate a book
    const book = new Book(title, author, isbn);

    // instantiate a UI object
    const ui = new UI();

    // validate form
    if(title === '' || author === '' || isbn === ''){
        ui.showAlert("Please enter a value in each field.", "error");
    } else {
        // add book to list
        ui.addBookToList(book);
        // show success alert
        ui.showAlert("Book added!", "success")
        //clear form fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Event listener for delete event
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();

    if(e.target.className === 'delete') {
        ui.deleteBook(e.target);
        
        // show alert on successful delete
        ui.showAlert("Book deleted.", "success");
    }
    
    e.preventDefault();
});