$( document ).ready(function() {
    //var aValue = storage.getItem(keyName);
    //Built form object for handling hourly day planner input.
    $( "form" ).submit(function( event ) { 
        var agendaTime = $(this).attr("id");
        var agendaText = $("#" + agendaTime + " :input[type=text]").val(); 
        console.log(agendaTime, agendaText);        
        localStorage.setItem(agendaTime, agendaText);
            event.preventDefault();
    });
});


// Get the value from a checked checkbox
//$( "input[type=checkbox][name=bar]:checked" ).val(); 
// $("label[for="+$(this).attr("id")+"]")
//$("#" + agendaTime + " > input")
var aValue = storage.getItem(keyName);

