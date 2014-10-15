// constructor function
function Book(name, rating, photo, review){
  this.name = name;
  this.rating = rating;
  this.photo = photo;
  this.review = review;
  this.displayBook = displayBook;
}

var infoBox = document.getElementById('info');

// new books
var fourBook = new Book('The Four Agreements', 4.07, 'http://d.gr-assets.com/books/1348204644l/6596.jpg','In The Four Agreements, don Miguel Ruiz reveals the source of self-limiting beliefs that rob us of joy and create needless suffering. Based on ancient Toltec wisdom, the Four Agreements offer a powerful code of conduct that can rapidly transform our lives to a new experience of freedom, true happiness, and love. - from GoodReads Reviews' );
var secretBook = new Book('The Secret', 3.53, 'http://d.gr-assets.com/books/1391995828l/52529.jpg','Fragments of a Great Secret have been found in the oral traditions, in literature, in religions and philosophies throughout the centuries. For the first time, all the pieces of The Secret come together in an incredible revelation that will be life-transforming for all who experience it. - from GoodReads Reviews' );

// display book function that is added to the constructor above
function displayBook() {

  var bookReview = document.createElement('div');
  bookReview.className = 'book_review cf';

  var result = "<h2>Book: " + this.name + "</h2>";
  result += "<p>Rating: " + this.rating + " out 5.</p>";
  result += '<img src="'+ this.photo +'" alt="'+ this.name +' book cover image." />';
  result += "<p>Review: " + this.review + "</p>";
  bookReview.innerHTML = result;
  infoBox.appendChild(bookReview);

  (function() {
    var review = "<h3>Write your own Review.</h3>";
    review += '<textarea type="text" placeholder="Write review">';
    bookReview.innerHTML += review;
    infoBox.appendChild(bookReview);
  }());
}


fourBook.displayBook();
secretBook.displayBook();

//////////////////

function UsersBook(name, rating, review){
  this.name = name;
  this.rating = rating;
  this.review = review;
}

var UserList = [];
var i = 0;


var bookButton = document.getElementById('add-my-book');

bookButton.addEventListener("click", addMyBook);

function addMyBook() {
  var name = document.getElementById('my-book-name').value;
  var rating = document.getElementById('my-book-rating').value;
  var review = document.getElementById('my-book-notes').value;

  UserList[i] = new UsersBook(name, rating, review);

  var myBookCollection = document.getElementById('my-book-collection');
  var bookContainer = document.createElement('div');

  var result = '<h2>Book: ' + UserList[i].name + '</h2>';
      result += '<p>Rating: ' + UserList[i].rating + ' out 5.</p>';
      result += '<p>Notes: ' + UserList[i].review + '</p>';

  bookContainer.innerHTML = result;
  myBookCollection.appendChild(bookContainer);

  i++;

}
