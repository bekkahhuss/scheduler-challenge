var time = moment().format("dddd, MMMM Do YYYY, h:mm a");
console.log(time);

var timeLabels = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

$("h4").each(function(index) {
    $(this).text(timeLabels[index]);
})
console.log(("h4").each);

var displayTime = $("#currentDay");
displayTime.text(time);


var saveBtn = $(".saveBtn");

var hour = moment().format("H");
console.log(hour);


$("textarea").each(function(index) {
    //add 9 hours to the difference between index number and hour
    if(index + 9 < moment().hours()) {
        $(this).addClass("past")
    }
    else if (index + 9 === moment().hours()) {
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    }
})

function saveTask (event) {
    event.preventDefault();
    localStorage.setItem($(this).siblings("h4").attr("id"), $(this).siblings("textarea").val());
}


saveBtn.on("click", saveTask)

// function checkTime () {
    // for(i=0; i=9; i++) {
    //     if 
    // }

// }