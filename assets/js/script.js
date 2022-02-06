var time = moment().format("dddd, MMMM Do YYYY, h:mm a");
var timeLabels = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

var displayTime = $("#currentDay");
displayTime.text(time);

var saveBtn = $(".saveBtn");
    
$("h4").each(function(index) {
    $(this).text(timeLabels[index]);
})


$("textarea").each(function() {
    var reloadTask = localStorage.getItem($(this).siblings("h4").attr("id"), $(this).siblings("textarea").val());
    $(this).text(reloadTask);
})


$("textarea").each(function(index) {

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
