const myLibrary = [];
const addButton = document.getElementById("addButton");
const newBookDialog = document.getElementById("newBookDialog");
const newBookForm = document.getElementById("newBookForm");
const cancelButton = document.getElementById("cancel");
const table = document.getElementById("table");

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

  closeTheDialog(newBookDialog);
});

cancelButton.addEventListener("click", (event) => {
  event.preventDefault();
  closeTheDialog(newBookDialog);
});

function Book(title, author, pages, read, index) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = index;
}

function addBookToLibrary(title, author, pages, read) {
  var newIndex = myLibrary.length;
  let newBook = new Book(title, author, pages, read, newIndex);
  console.log(newBook.index);

  myLibrary.push(newBook);
  console.log(myLibrary);

  //TODO: Make this into a separate function to avoid redundant code
  let newRow = table.getElementsByTagName("tbody")[0].insertRow(-1);

  for (i = 0; i < 5; ++i) {
    let newCell = newRow.insertCell(-1);
    var newText;

    if (i === 0) {
      newText = document.createTextNode(newBook.title);
    } else if (i === 1) {
      newText = document.createTextNode(newBook.author);
    } else if (i === 2) {
      newText = document.createTextNode(newBook.pages);
    } else if (i === 3) {
      var statusButton = document.createElement("button");
      statusButton.type = "button";
      statusButton.innerText = "Change Status";
      newCell.appendChild(statusButton);
      continue;
    } else {
      if (read) {
        newText = document.createTextNode("Yes");
      } else {
        newText = document.createTextNode("No");
      }
    }
    newCell.appendChild(newText);
  }
}

function displayLibrary() {
  myLibrary.forEach((Book) => {
    let newRow = table.insertRow(-1);

    for (i = 0; i < 5; ++i) {
      let newCell = newRow.insertCell(-1);
      var newText;

      if (i === 0) {
        newText = document.createTextNode(Book.title);
      } else if (i === 1) {
        newText = document.createTextNode(Book.author);
      } else if (i === 2) {
        newText = document.createTextNode(Book.pages);
      } else if (i === 3) {
        var statusButton = document.createElement("button");
        statusButton.type = "button";
        statusButton.innerText = "Change Status";
        newCell.appendChild(statusButton);
        return;
      } else {
        if (read) {
          newText = document.createTextNode("Yes");
        } else {
          newText = document.createTextNode("No");
        }
      }
      newCell.appendChild(newText);
    }
  });
}

function clearTable() {
  var first = table.firstElementChild;
  while (first) {
    first.remove();
    first = table.firstElementChild;
  }
}

function clearLibrary() {
  clearBookshelf();
  myLibrary = [];
}

function closeTheDialog(dialog) {
  dialog.close();
  openCheck(dialog);
}

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}
