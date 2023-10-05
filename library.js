const myLibrary = [];
const addButton = document.getElementById("addButton");

const newBookDialog = document.getElementById("newBookDialog");
const newBookForm = document.getElementById("newBookForm");

addButton.addEventListener("click", (event) => {
  newBookDialog.showModal();
  openCheck(newBookDialog);
});

newBookForm.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();

  console.log(event.currentTarget.title.value);
  console.log(event.currentTarget.author.value);
  console.log(event.currentTarget.pages.value);
  console.log(event.currentTarget.read.checked);

  addBookToLibrary(
    event.currentTarget.title.value,
    event.currentTarget.author.value,
    event.currentTarget.pages.value,
    event.currentTarget.read.checked
  );
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  console.log(myLibrary);
}

function displayLibrary() {}

function closeTheForm() {
  newBookForm.close();
  openCheck(newBookDialog);
}

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}
