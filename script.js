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
const bookShelf = document.querySelector("#booksGrid");
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
  const isReadCheck = isRead.checked;
  const newBook = new Book(titleValue, authorValue, pagesValue, isReadCheck);
  myLibrary.push(newBook);

  if (titleValue != '') {
    const title = document.createElement("div");
    title.classList.add("title");
    const author = document.createElement("div");
    author.classList.add("author");
    const pages = document.createElement("div");
    pages.classList.add("pages");
    const read = document.createElement("div");
    read.classList.add("read");
    const bookContainer = document.createElement("div");
  bookContainer.classList.add("book-container");
  const removeBtn = document.createElement("button");
  removeBtn.classList.add('removeBtn');
  
    title.innerHTML = `<strong>Titulo:</strong> ${newBook.title} `;
    author.innerHTML = `<strong>Author:</strong> ${newBook.author}`;
    pages.innerHTML = `<strong>Pages:</strong> ${newBook.pages}`;
    read.innerHTML = `<strong> have you read it:</strong> ${newBook.isRead}`;
    removeBtn.innerText = 'Remover livro'
    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(read);
    bookContainer.appendChild(removeBtn)
    bookShelf.appendChild(bookContainer);
    function removeBook(){
      bookContainer.remove()
      bookContainer.innerText= ''
      }
    removeBtn.addEventListener('click', removeBook)
    return newBook;
  } else {
    alert("Adicione todas as informações do livro");
  }
}

btnCard.addEventListener("click", addBookToLibrary);

