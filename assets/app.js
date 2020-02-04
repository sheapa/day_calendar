$( document ).ready(function() {

    //Function for pulling keys & values from local storage and setting values to appropriate time block.
    var keys = Object.keys(localStorage);
    for (var i = 0;  i < keys.length; i++) {
        console.log(keys[i]);
        var selectedTextArea = $("#" + keys[i] + " #timeBlock")[0];
        selectedTextArea.placeholder = localStorage.getItem(keys[i]);   
    }
    
    // Function for setting appointment values and linking them to time block key, then saving in local storage..
    $( "form" ).submit(function( event ) { 
        var agendaTime = $(this).attr("id");
        var agendaText = $("#" + agendaTime + " :input[type=text]").val(); 
        console.log(agendaTime, agendaText);        
        localStorage.setItem(agendaTime, agendaText);
            event.preventDefault();

    });
});

