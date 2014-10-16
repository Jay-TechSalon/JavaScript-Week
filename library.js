// constructor function for users books
function UsersBook(name, image, rating, review){
  this.name = name;
  this.image = image;
  this.rating = rating;
  this.review = review;
}

// for loop to iterate throught the added books to get
// the average rating and total books added
function getAverage() {
    var bookTotal = userList.length,
        ratingSum = 0,
        averageRating;
    for (var i = 0; i < bookTotal; i++) {
      ratingSum += parseInt(userList[i].rating, 10);
    }
    averageRating = (ratingSum / bookTotal).toFixed(2);
    document.getElementById("average-rating").innerHTML = averageRating;
    document.getElementById("book-total").innerHTML = bookTotal;
}

// save the users books to an array
var userList = [];
var i = 0;

var bookButton = document.getElementById('add-my-book');
bookButton.addEventListener("click", addMyBook);

// add book function that grabs the values from the users input
// and logs it into the userList array above as it instantiates
// another book - then adds this to the DOM
function addMyBook() {
  var name = document.getElementById('my-book-name').value;
  var image = document.getElementById('my-image').value;
  var rating = document.getElementById('my-book-rating').value;
  var review = document.getElementById('my-book-notes').value;

  userList[i] = new UsersBook(name, image, rating, review);

  var myBookCollection = document.getElementById('my-book-collection');
  var bookContainer = document.createElement('div');
  bookContainer.className = 'our_review cf';

  var result = '<h2>Book: ' + userList[i].name + '</h2>';
      result += '<p>Rating: ' + userList[i].rating + ' out 5.</p>';
      result += "<img src='" + userList[i].image + "'/>";
      result += '<p>Notes: ' + userList[i].review + '</p>';

  bookContainer.innerHTML = result;
  myBookCollection.appendChild(bookContainer);

  i++;
  getAverage();
}
