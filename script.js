
// var minutesperday;
// var pagesperbook;
// var timespan;

var fetch = function () {
  $.ajax({
    method: "GET",
    url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
    dataType: "json",
    success: function(data) {
      console.log(data);
      displayBook(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  }); 
};

function displayBook(data){
  var newBook = {
    title: data.items[0].volumeInfo.title,
    description: data.items[0].volumeInfo.description,
  }

  
  
  var BooksResults = {
   books: [
          { name: "Catcher in the Rye", img: "img/Catcher.jpg", pages: 240, time: 0, description: "The Catcher in the Rye is set around the 1950s and is narrated by a young man named Holden Caulfield. Holden is not specific about his location while he's telling the story, but he makes it clear that he is undergoing treatment in a mental hospital or sanatorium." }
          ]
      };
  var source = $('#books-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(BooksResults);

// append our new html to the page
$('.books').append(newHTML);
}

$('#finalClick').on('click', function (e) {
  e.preventDefault();
  fetch();
});


// 
// data.items[0].volumeInfo.authors