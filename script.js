const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

document.addEventListener("DOMContentLoaded", () => {
    const bookContainer = document.querySelector(".book-container");

    // Event delegation
    bookContainer.addEventListener("click", (event) => {
        if (event.target.closest(".title-btn")) {
            console.log("title is clicked");
            //alert with the information of book
        }
        if (event.target.closest(".close-btn")) {
            console.log("remove button is clicked");
            //removing the clicked button
        }
    });

    const btnSubmit = document.getElementById("submit");
    btnSubmit.addEventListener("click", () => {
        const inputTitle = document.getElementById("title").value;
        const inputAuthor = document.getElementById("author").value;
        const inputPages = document.getElementById("pages").value;

        const inputReadStart = document.getElementById("read");
        let isRead = inputReadStart.checked;
        let inputReadEnd;
        if (isRead) {
            inputReadEnd = "read";
        } else {
            inputReadEnd = "not read";
        }

        const newBook = new Book(inputTitle, inputAuthor, inputPages, inputReadEnd);
        myLibrary.push(newBook);
        console.log(newBook);
        console.log(myLibrary);

        // Add newBook to the top-container to display
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        const btnBook = document.createElement("button");
        btnBook.classList.add("title-btn");
        const btnRemove = document.createElement("button");
        btnRemove.classList.add("close-btn");
        btnBook.textContent = newBook.title; // Use newBook instead of myLibrary[0]
        btnRemove.textContent = "X";
        bookItem.appendChild(btnBook);
        bookItem.appendChild(btnRemove);
        bookContainer.appendChild(bookItem);
    });
});

