
// var minutesperday;
// var pagesperbook;
// var timespan;




$('#finalClick').on('click', function (e) {
  e.preventDefault();

  var loadContents = function (){
    if ($('#booktitle').val() === "Catcher") {
      handlebarProcess();
    }
  }

  var minutesperday = $('#mpd').val();
  console.log(minutesperday);
  var pagesperbook = $('#ppb').val();
  console.log(pagesperbook);
  timespanCalc(minutesperday, pagesperbook);
});


var timespanCalc = function(minutesperday, pagesperbook) {
  var x = parseInt(minutesperday);
  var y = parseInt(pagesperbook);
  var timespan = y/x;
  console.log(timespan);
  BooksResults.books[0].time = timespan;
//End of timespanCalc Function

}


var handlebarProcess = function(){
//Beginning of HandleBar Magic!

var BooksResults = {
  books: [
    { name: "Catcher in the Rye", img: "img/Catcher.jpg", pages: 240, time: 0, description: "The Catcher in the Rye is set around the 1950s and is narrated by a young man named Holden Caulfield. Holden is not specific about his location while he's telling the story, but he makes it clear that he is undergoing treatment in a mental hospital or sanatorium." }
    // { name: "Facebook", link: "http://facebook.com", socialNetwork: true },
    // { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
    // { name: "Twitter", link: "http://twitter.com" },
  ]
};

var source = $('#books-template').html();
var template = Handlebars.compile(source);
var newHTML = template(BooksResults);

// append our new html to the page
$('.books').append(newHTML);

}
//End of HandleBar Magic!



//syntax for alerting the user of whatever is inputterd

$('button').on('click', function () {
  $('.intro-heading').append(" " + $('#my-input').val());
});


$('.candy').append('Chocolate');





// $('div').css('color', 'red');

