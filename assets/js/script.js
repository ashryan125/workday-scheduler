
// Display today's day and date - removed moment.js 5/26/21
// var todayDate = moment().format('dddd, MMM Do YYYY, h:mm a');
var todayDate = Date;
$("#currentDay").html(todayDate);


$(document).ready(function () {

    function timeCheck() {  // replaced timeTracker with timeCheck for better clarity
        //get current number of hours.
        // var currentTime = moment().hour(); - remove moment.js 5/26
        var date = new Date;
        var currentTime = date.getHours();  // replaced timeNow with currentTime for easier understanding

        // loop over time blocks
        $(".time-block").each(function () {

            var timeBlock = parseInt($(this).attr("id").split("task")[1]);


            // To check the time and add the classes for background colors
            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past noclick");
        
            }
            else if (timeBlock === currentTime) {
                $(this).removeClass("past noclick");
                $(this).removeClass("future");
                $(this).addClass("present");
    
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past noclick");
                $(this).addClass("future");

            }
        })
        // prevent clicking on save button if time passed - added 5/26
        $(".btn").each(function () {

            var timeBlock = parseInt($(this).attr("id").split("btn")[1]);

            // To check the time and add the classes for background colors
            if (timeBlock < currentTime) {
        
                $(this).addClass("noclick");
            }
            else if (timeBlock === currentTime) {
                $(this).removeClass("noclick");
    
            }
            else {
                $(this).removeClass("noclick");

            }
        })
    };

        // saveBtn click listener 
        $(".saveBtn").on("click", function() {
            // Get nearby values of the description in JQuery
            var text = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
    
            // Save text in local storage
            localStorage.setItem(time, text);
        });

    // Get tasks from local storage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeCheck();
});

