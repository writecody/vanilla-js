class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
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

    showAlert(msg, cssClass) {
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

    deleteBook(target) {
        if(target.className == 'delete'){
            target.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local storage class
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function(book) {
            const ui = new UI();

            // add book to ui
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach(function(book, index) {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

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
        // add book to local storage
        Store.addBook(book);
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

        // remove from local storage
        Store.removeBook(e.target.previousElementSibling.textContent);
        
        // show alert on successful delete
        ui.showAlert("Book deleted.", "success");
    }
    
    e.preventDefault();
});