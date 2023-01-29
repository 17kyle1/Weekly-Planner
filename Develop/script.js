// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var todayDate = $('#currentDay')
var pastTimeBlock = $('.past')
var presentTimeBlock = $('.present')
var futureTimeBlock = $('.future')
var saveButton = $('.btn')
var hour = $('.hour')

var inputDescription = $('.description')
var containerEl = $('.row')
var time9 =$('.description-9')
var time10 =$('.description-10')
var time11 =$('.description-11')
var time12 =$('.description-12')
var time13 =$('.description-13')
var time14 =$('.description-14')
var time15 =$('.description-15')
var time16 =$('.description-16')
var time17 =$('.description-17')
/*
var slot9 =localStorage.setItem('time9',time9)
var slot10 =localStorage.setItem('time10',time10)
var slot11 =localStorage.setItem('time11',time11)
var slot12 =localStorage.setItem('time12',time12)
var slot13 =localStorage.setItem('time13',time13)
var slot14 =localStorage.setItem('time14',time14)
var slot15 =localStorage.setItem('time15',time15)
var slot16 =localStorage.setItem('time16',time16)
var slot17 =localStorage.setItem('time17',time17)

*/
$(function () {
  var data = $(this)
  
  if (data != null){
    var newData = localStorage.setItem(data)
    console.log(newData)
    containerEl.innerText =newData;
  }
})


console.log(inputDescription)
console.log(hour)
displayTime()
function displayTime() {
  var currentTime = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  todayDate.text(currentTime);
}

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

  