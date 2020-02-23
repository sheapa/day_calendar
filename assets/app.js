// Moment Variables
var m = moment()
var mDate = m.format("MM-DD-YYYY")
var mTime = m.format("HH")
console.log(mTime);

// Everything below this comment functions as desired. 

$( document ).ready(function() {

    //Display current date inside header.
    $("#currentDay").append("<span>"+mDate+"</span>");
             
    //Function for pulling keys & values from local storage and setting values to appropriate time block.
    var keys = Object.keys(localStorage);
    for (var i = 0;  i < keys.length; i++) {
        var selectedTextArea = $("#" + keys[i] + " #timeBlock")[0];
        selectedTextArea.placeholder = localStorage.getItem(keys[i]);             
    };
    
    // Function for setting appointment values and linking them to time block key, then saving in local storage..
    $( "form" ).submit(function( event ) { 
        var agendaTime = $(this).attr("id");
        var agendaText = $("#" + agendaTime + " :input[type=text]").val();         
        localStorage.setItem(agendaTime, agendaText);
            event.preventDefault();
    });

     // Function for responsive color coding of schedule blocks.
    

     
     $("form").makeArray(function(formArray) {
        // var formArray = $(this).attr("id")
        
        console.log(formArray);
        //console.log(index + $(this).attr("id"));
        // Variables Created for comparing moment time to time represented in each schedule block.
        //var agendaIndex = $(this).attr("id");
        //var timeBlockText = $(this).attr("input");
        
        //console.log(agendaIndex);

        // Comparison statements for determining schedule block color.
            // if ( $(this).attr("id") == mTime) {
            //     $("input").addClass("present");
            // }
            // else if ( $(this).attr("id") > mTime) {
            //     $("input").addClass("future");
                

            // }else {
            //     $("input").removeClass("future present");
            //     $("input").addClass("past");
            // }

    // });   
        // if (mTime == 9) {
        //     $(inputArr[0]).addClass( "present" );
        // }else if (mTime > 9) {
        //     $(inputArr[0]).addClass( "past" );
        // }else {
        //     $(inputArr[0]).addClass( "future");
        // }


});


});


