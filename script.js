const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", () => {
    const inputTitle = document.getElementById("title").value;
    const inputAuthor = document.getElementById("author").value;
    const inputPages = document.getElementById("pages").value;
    
    const inputReadStart = document.getElementById("read");
    let isRead = inputReadStart.checked;
    let inputReadEnd;
    if(isRead) {
        inputReadEnd = "read";
    } else {
        inputReadEnd = "not read";
    }

    const newBook = new Book(inputTitle, inputAuthor, inputPages, inputReadEnd);
    myLibrary.push(newBook);
    console.log(newBook);
    console.log(myLibrary);
});
