function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
   }
   return library
 }

function addBook(name, book) {
  if (book.genre === "fantasy") {
    name.shelves.fantasy.push(book);
  } else if (book.genre === "nonFiction") {
    name.shelves.nonFiction.push(book);
  } else {
    name.shelves.fiction.push(book);
  }
}
//
// function checkoutBook(library, title, genre) {
//   if (title === library.shelves[genre][0].title) {
//     library.shelves[genre].pop();
//     return `You have now checked out ${title} from the ${library.name}`;
//   }
// }


function checkoutBook(library, title, genre) {
  var contents = [];
  if (title === library.shelves[genre][0].title) {
    library.shelves[genre].pop();
    return `You have now checked out ${title} from the ${library.name}`;
  } else {
      return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;
  }
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
