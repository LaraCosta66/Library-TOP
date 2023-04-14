
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
const booksGrid = document.querySelector('#booksGrid')
const btnCard = document.querySelector('#btnCard')
const form = document.querySelector('#addBookForm')
const titleInput = document.querySelector('#title')
const authorInput = document.querySelector('#author')
const pagesInput = document.querySelector('#pages')
const isRead = document.querySelector('#isRead')



function getInputValue(event) {
  event.preventDefault(); 
  const titleValue = titleInput.value;
   const authorValue = authorInput.value;
    const pagesValue = pagesInput.value;
    // const isReadValue = isReadValue.checked;
  
    if(titleValue != ' '){
      const title = document.createElement('span')
      const author = document.createElement('span')
      const pages = document.createElement('span')
      // const read = document.createElement("span")
      title.textContent = titleValue
      author.textContent = authorValue
      pages.textContent = pagesValue
      // read.textContent = isReadValue
      booksGrid.appendChild(title)
      booksGrid.appendChild(author)
      booksGrid.appendChild(pages)
      // booksGrid.appendChild(isReadValue)
    }else{
      alert(" Error tente novamente")
    }

   
}
// const Library = ()=> {
// const title = document.createElement('span')
// const author = document.createElement('span')
// const pages = document.createElement('span')
// title = titleInput.value
// author = authorInput.value
// pages = pagesInput.value
// booksGrid.appendChild(title)
// booksGrid.appendChild(author)
// booksGrid.appendChild(pages)
// }
// function addBookToLibrary() {
//   let title = titleInput.value;
//   let author = authorInput.value;
//   let pages = pagesInput.value;
//   const newBook = new Book(title, author, pages);
//     myLibrary.push(newBook);
//   }


  btnCard.addEventListener('click', getInputValue);