// Array and counter for storing user's book entries
//// Checks for localStorage userList,
//// if none, assign empty array to variable
var userList = JSON.parse(localStorage.getItem('userList')) || [],
    i = 0,
    myBookCollection = document.getElementById('my-book-collection');

document.getElementById('add-my-book').addEventListener('click', addMyBook);


// constructor function for user's books
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
    document.getElementById('average-rating').innerHTML = averageRating;
    document.getElementById('book-total').innerHTML = bookTotal;
}

// add book function that grabs the values from the users input
// and logs it into the userList array above as it instantiates
// another book - then adds this to the DOM
function addMyBook() {
  var name = document.getElementById('my-book-name').value,
      image = document.getElementById('my-image').value,
      rating = document.getElementById('my-book-rating').value,
      review = document.getElementById('my-book-notes').value,
      bookContainer = document.createElement('div'),
      bookEntry;

  userList[i] = new UsersBook(name, image, rating, review);
  localStorage.setItem('userList', JSON.stringify(userList));

  bookContainer.className = 'our_review cf';

  bookEntry = '<h2>Book: ' + userList[i].name + '</h2>' +
              '<p>Rating: ' + userList[i].rating + ' out of 5.</p>' +
              '<img src="' + userList[i].image + '"/>' +
              '<p>Notes: ' + userList[i].review + '</p>';

  bookContainer.innerHTML = bookEntry;
  myBookCollection.appendChild(bookContainer);

  i++;
  getAverage();
}

// renders localStorage bookList to DOM
function renderBookList() {
  for (var i = 0, numBooks = userList.length; i < numBooks; i++) {
    var bookContainer = document.createElement('div'),
        bookEntry;

    bookContainer.className = 'our_review cf';

    bookEntry = '<h2>Book: ' + userList[i].name + '</h2>' +
                '<p>Rating: ' + userList[i].rating + ' out of 5.</p>' +
                '<img src="' + userList[i].image + '"/>' +
                '<p>Notes: ' + userList[i].review + '</p>';

    bookContainer.innerHTML = bookEntry;
    myBookCollection.appendChild(bookContainer);
  }
}

renderBookList();
