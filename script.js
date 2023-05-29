// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function (){
var todayDate = $('#currentDay')

var line9 = $('#9 textarea')
var line10 = $('#10 textarea')
var line11 = $('#11 textarea')
var line12 = $('#12 textarea')
var line13 = $('#13 textarea')
var line14 = $('#14 textarea')
var line15 = $('#15 textarea')
var line16 = $('#16 textarea')
var line17 = $('#17 textarea')



$('.saveBtn').on('click', function() {
  

  var value = $(this).siblings('.description').val();

  var id = $(this).parent().attr('id');
var list = JSON.parse(localStorage.getItem('tasksList'))
if (!list){
  list = {}
}
list[id] = value
  localStorage.setItem('tasksList', JSON.stringify(list));
  
  

 

  console.log(value)
});
var list = JSON.parse(localStorage.getItem('tasksList'))
if (list){
line9.text(list['9'])
line10.text(list['10'])
line11.text(list['11'])
line12.text(list['12'])
line13.text(list['13'])
line14.text(list['14'])
line15.text(list['15'])
line16.text(list['16'])
line17.text(list['17'])

}


  

$('.time-block').each(function(){
  
  var realTime = parseInt(dayjs().format("H"))
  todayDate.innerText = realTime
  console.log(realTime)
  let hour = parseInt($(this).attr('id'))

if (hour < realTime){
  $(this).addClass('past');
  } else if(hour == realTime){
    $(this).addClass('present')
  } else if(hour > realTime){
    $(this).addClass('future')
  }
}) })

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  function PastPresentFuture() {
    var hourX = dayjs().hour();
    //new logic on adding a numerical value to the time
    console.log(hourX)
    timeBlock.each(function () {
      //The parseInt() function parses a string and returns an integer
      var sectionHour = parseInt($(this).attr('id').split('-')[1]);
      console.log($(this))
      if (sectionHour < hourX) {
        //if the hour on the to-do list is in the past the add class"past"
        console.log("1")
        timeBlock.addClass('past');
      } else if (sectionHour === hourX) {
        console.log("2")
        //then 
        timeBlock.removeClass('past');
        timeBlock.addClass('present');
      } else {
        console.log("3")
        timeBlock.removeClass('past');
        timeBlock.removeClass('present');
        timeBlock.addClass('future');
      }
    });
  }

   