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

    const newBook = new Book(titleValue, authorValue, pagesValue);
    myLibrary.push(newBook);
    if(newBook != '') {
      const newDiv = document.createElement('div');
      newDiv.innerText = `Titulo: ${newBook.title}, Author: ${newBook.author}, Number of Pages: ${newBook.pages}`;
      booksGrid.appendChild(newDiv);
      return newBook;
    }else{
      alert('adicione valores')
    }
  
}
// function addBookToLibrary(event) {
//   event.preventDefault();
//   const titleValue = titleInput.value;
//   const authorValue = authorInput.value;
//   const pagesValue = pagesInput.value;
//   const newBook = new Book(titleValue, authorValue, pagesValue);
//   myLibrary.push(newBook);
 
// }

// const title = document.createElement('span')
// const author = document.createElement('span')
// const pages = document.createElement('span')

// library.textContent = my
// author.textContent = authorValue
// pages.textContent = pagesValue

// booksGrid.appendChild(title)
// booksGrid.appendChild(author)

btnCard.addEventListener("click", addBookToLibrary);
