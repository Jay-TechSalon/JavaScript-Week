function UsersBook(name, rating, review){
  this.name = name;
  this.rating = rating;
  this.review = review;
}

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


var userList = [];
var i = 0;


var bookButton = document.getElementById('add-my-book');
bookButton.addEventListener("click", addMyBook);

function addMyBook() {
  var name = document.getElementById('my-book-name').value;
  var rating = document.getElementById('my-book-rating').value;
  var review = document.getElementById('my-book-notes').value;

  userList[i] = new UsersBook(name, rating, review);

  var myBookCollection = document.getElementById('my-book-collection');
  var bookContainer = document.createElement('div');
  bookContainer.className = 'our_review';

  var result = '<h2>Book: ' + userList[i].name + '</h2>';
      result += '<p>Rating: ' + userList[i].rating + ' out 5.</p>';
      result += '<p>Notes: ' + userList[i].review + '</p>';

  bookContainer.innerHTML = result;
  myBookCollection.appendChild(bookContainer);

  i++;
  getAverage();
}
