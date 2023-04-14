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
const booksGrid = document.querySelector("#booksGrid");
const btnCard = document.querySelector("#btnCard");
const form = document.querySelector("#addBookForm");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");


function addBookToLibrary(event) {
  event.preventDefault();
  const titleValue = titleInput.value;
  const authorValue = authorInput.value;
  const pagesValue = pagesInput.value;
  const isReadCheck =isRead.checked;
  const resultValues = (titleValue, authorValue, pagesValue);
  const newBook = new Book(titleValue, authorValue, pagesValue, isReadCheck);
  myLibrary.push(newBook);

  if (resultValues) {
    const title = document.createElement("span");
    const author = document.createElement("span");
    const pages = document.createElement("span");
const read =document.createElement('span');
    title.innerText = `Titulo: ${newBook.title} `;
    author.innerText = `Author: ${newBook.author}`;
    pages.innerText = `Number of Pages: ${newBook.pages}`;
    read.innerText = ` have u read it: ${newBook.isRead}`
    booksGrid.appendChild(title);
    booksGrid.appendChild(author);
    booksGrid.appendChild(pages);
    booksGrid.appendChild(read);
    return newBook;
  } else {
    alert("Adicione todas as informações do livro");
  }
}

btnCard.addEventListener("click", addBookToLibrary);
