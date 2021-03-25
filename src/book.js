

function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character;
};

function saveReview(newReview, reviews) {
    if (!reviews.includes(newReview)) {
      reviews.push(newReview);
    }
  //May be required to use a for loop. Come back and refactor???
  //
  // for(var reviews = 0;  < reviews.length; )
  // if (newReview !== reviews[-1]) {
  // reviews.push(newReview);
  // }
}

function calculatePageCount(title) {
  return title.length * 20;
};

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
  return book;
};

function editBook(book) {
  book.pageCount *= .75;
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
