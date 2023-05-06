function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
const myLibrary = [
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    pages: 354,
    read: true,
  },
];

//DOM Objects
const bookShelf = document.querySelector("#booksGrid ");
const btnCard = document.querySelector("#btnCard");
const form = document.querySelector("#addBookForm");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");

btnCard.addEventListener("click", addBookToLibrary);

function addBookToLibrary(event) {
  event.preventDefault();
  const titleValue = titleInput.value;
  const authorValue = authorInput.value;
  const pagesValue = pagesInput.value;
  const isReadCheck = isRead.checked;
  const newBook = new Book(titleValue, authorValue, pagesValue, isReadCheck);
  myLibrary.push(newBook);
  if (titleValue) {
    createBookList();
  } else {
    console.log("not all information");
  }
}
//Function create book
function createBookList() {
  const titleValue = titleInput.value;
  const authorValue = authorInput.value;
  const pagesValue = pagesInput.value;
  const isReadCheck = isRead.checked;
  const bookContainer = document.createElement("div");
  bookContainer.classList.add("book-container");
  bookContainer.innerHTML = `
    <div class="title"><strong>Titulo:</strong> ${titleValue}</div>
    <div class="author"><strong>Author:</strong> ${authorValue}</div>
    <div class="pages"><strong>Pages:</strong> ${pagesValue}</div>
    <div class="read"><strong> have you read it:</strong> ${isReadCheck}</div>
    <button class='removeBtn'>Remove book</button>
  `;
  const removeBtn = bookContainer.querySelector(".removeBtn");
  removeBtn.addEventListener("click", removeBook);
  bookShelf.appendChild(bookContainer);
}

//Function remove book
function removeBook(e) {
  const element = e.currentTarget.parentElement;
  element.remove();
}
