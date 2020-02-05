// Moment Variables
var m = moment()
var mDate = m.format("MM-DD-YYYY")
var mTime = m.format("HH")

//Creates array of inputs from exhisting html...
var inputObj = $( "input" );
var inputArr = $.makeArray( inputObj );


// I'm attempting to automate the "if/elseIf/esle" statements below by using a for loop... but I just can't figure it out... Can you let me know
// If i'm on the right track with this... or point me in a better direction? I'm struggling with setting my variables... Perhaps I need to change my ID tags to a 24 hour format?
// for the sake of this loop?
/*
for (var i = 0;  i < inputArr.length; i++) {
    
    if (mTime == ?this? ) {
        $(inputArr[i]).addClass( "present" );
    }else if (mTime > this) {
        $(inputArr[i]).addClass( "past" );
    }else {
        $(inputArr[i]).addClass( "future");
    }
};
*/

// The "if/elseIf/esle" statements below works for a single instance and I believe will function properly with moment. Trying to automate it above.
if (mTime == 9) {
    $(inputArr[0]).addClass( "present" );
}else if (mTime > 9) {
    $(inputArr[0]).addClass( "past" );
}else {
    $(inputArr[0]).addClass( "future");
}

// This is junk code that I was playing around with, when I attempted a different approach. I might circle back to it, if the current approach is a dead end. 
 /*
if ((mTime < 17) && (mTime > 8)) {
        $( "input" ).addClass( "future" );
    }
*/

// Everything below this comment functions as desired. 

$( document ).ready(function() {
        
    //Display current date inside header.
    $("#currentDay").append("<span>"+mDate+"</span>");
             
    //Function for pulling keys & values from local storage and setting values to appropriate time block.
    var keys = Object.keys(localStorage);
    for (var i = 0;  i < keys.length; i++) {
        console.log(keys[i]);
        var selectedTextArea = $("#" + keys[i] + " #timeBlock")[0];
        selectedTextArea.placeholder = localStorage.getItem(keys[i]);             
    };
    
    // Function for setting appointment values and linking them to time block key, then saving in local storage..
    $( "form" ).submit(function( event ) { 
        var agendaTime = $(this).attr("id");
        var agendaText = $("#" + agendaTime + " :input[type=text]").val(); 
        console.log(agendaTime, agendaText);        
        localStorage.setItem(agendaTime, agendaText);
            event.preventDefault();
    });
});

