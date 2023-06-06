let myLibrary = [
    {title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: false},
    {title: "The Stars", author: "B.R Smith", pages: 170, read: true},
];

// constructor
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// function that creates a book card for each book in the array, each array object gets its own div
function createBookCard() {
    let bookGrid = document.getElementById('bookSlot');
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div');
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const buttonGroup = document.createElement('div');
        const readBtn = document.createElement('button');
        const removeBtn = document.createElement('button');

        title.textContent = `"${myLibrary[i].title}"`;
        author.textContent = myLibrary[i].author;
        pages.textContent = `${myLibrary[i].pages} pages`;
        removeBtn.textContent = 'Remove';

        if (book.isRead) {
            readBtn.textContent = 'Read'
            readBtn.classList.add('btn-light-green')
          } else {
            readBtn.textContent = 'Not read'
            readBtn.classList.add('btn-light-red')
        }

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        buttonGroup.appendChild(readBtn);
        buttonGroup.appendChild(removeBtn);
        bookCard.appendChild(buttonGroup);
        bookGrid.appendChild(bookCard);

        bookCard.classList.add('book-card');
        buttonGroup.classList.add('button-group');
        readBtn.classList.add('btn')
        removeBtn.classList.add('btn')
        // readBtn.onclick = toggleRead
        // removeBtn.onclick = removeBook

    }
    revealForm();
}

// function that adds a book to the array when the submit button is clicked
function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    
    let newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    createBookCard();
}

// function that updates the BookGrid to reflect the current state of the array
function updateBooksGrid() {
    resetBooksGrid();
    createBookCard();
}
  
const resetBooksGrid = () => {
    booksGrid.innerHTML = ''
}

// function that modifies the css ID addBookModal to change transform: scale(0) to transform: scale(1)
function revealForm() {
    let addBookModal = document.getElementById('addBookModal');
    let addBookBtn = document.getElementById('addBookBtn');
    let closeBtn = document.getElementById('closeBtn');

    addBookBtn.onclick = function() {
        addBookModal.classList.add('active')
        overlay.classList.add('active')
        updateBooksGrid();
    }
    closeBtn.onclick = function() {
        addBookModal.classList.remove('active')
        overlay.classList.remove('active')
        errorMsg.classList.remove('active')
        errorMsg.textContent = ''
    }
}

window.onload = () => {
    createBookCard();
    addBookToLibrary();
};