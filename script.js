
let myLibrary = [
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    pages: 354,
    read: true
  },
];
function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }

//DOM Objects
const booksGrid = document.querySelector('#booksGrid')
const btnCard = document.querySelector('#btnCard')
const form = document.querySelector('#addBookForm')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const isRead = document.querySelector('#isRead')



function addBookToLibrary(event) {
  event.preventDefault(); 
  const titleValue = titleInput.value;
   const authorValue = authorInput.value;
    const pagesValue = pagesInput.value;
    
  
      // const title = document.createElement('span')
      // const author = document.createElement('span')
      // const pages = document.createElement('span')
   
      // library.textContent = my
      // author.textContent = authorValue
      // pages.textContent = pagesValue
 
      // booksGrid.appendChild(title)
      // booksGrid.appendChild(author)
  

      const newBook = new Book(titleValue, authorValue, pagesValue);
      myLibrary.push(newBook);
     return console.log(myLibrary)
  }



  btnCard.addEventListener('click', addBookToLibrary);