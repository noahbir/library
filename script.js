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
        const target = event.target;
        
        if (event.target.closest(".title-btn")) {
            console.log("title is clicked");
            const index = event.target.getAttribute("data-index");
            const book = myLibrary[index];
            alert(`Title: ${book.title}\nAuthor: ${book.author}\nPages: ${book.pages}\nRead: ${book.read}`);
        }
        if (event.target.closest(".close-btn")) {
            console.log("remove button is clicked");
            const index = event.target.getAttribute("data-index");
            myLibrary.splice(index, 1);

            // remove div from bookContainer
            const bookItem = target.closest(".book-item");
            bookContainer.removeChild(bookItem);

            // Update data-index attributes for remaining books
            Array.from(bookContainer.children).forEach((item, idx) => {
                const titleBtn = item.querySelector(".title-btn");
                if (titleBtn) {
                    titleBtn.setAttribute("data-index", idx);
                }
                const closeBtn = item.querySelector(".close-btn");
                if (closeBtn) {
                    closeBtn.setAttribute("data-index", idx);
                }
            });
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
        btnBook.setAttribute("data-index", myLibrary.length - 1);
        const btnRemove = document.createElement("button");
        btnRemove.classList.add("close-btn");
        btnBook.textContent = newBook.title; // Use newBook instead of myLibrary[0]
        btnRemove.textContent = "X";
        bookItem.appendChild(btnBook);
        bookItem.appendChild(btnRemove);
        bookContainer.appendChild(bookItem);
    });

    const btnClear = document.getElementById("clear");
    btnClear.addEventListener("click", () => {
        const inputTitle = document.getElementById("title");
        const inputAuthor = document.getElementById("author");
        const inputPages = document.getElementById("pages");
        inputTitle.value = "";
        inputAuthor.value = "";
        inputPages.value = "";
        const inputReadStart = document.getElementById("read");
        inputReadStart.checked = false;

    });
});

