
let myLibrary = [
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    pages: 354,
    read: true
  }
];
function Book(title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }

//DOM Objects
const form = document.querySelector('#addBookForm')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const isRead = document.querySelector('#isRead')



function getInputValue() {
  
  // Get the value of the input element
  let titleValue = titleInput.value;
   let authorValue = authorInput.value;
    let pagesValue = pagesInput.value;
  
  // Display the value in an alert box
  alert("The value is: " + titleValue + authorValue + pagesValue);
   
}
// function addBookToLibrary() {
//   let title = titleInput.value;
//   let author = authorInput.value;
//   let pages = pagesInput.value;
//   const newBook = new Book(title, author, pages);
//     myLibrary.push(newBook);
//   }



  const booksGrid = document.querySelector('#booksGrid')
  const btnCard = document.querySelector('#btnSubmit')
  btnCard.addEventListener('click', getValue);