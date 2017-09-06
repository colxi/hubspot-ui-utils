// config
var hbs_expanders         = ".hbl-expand";
var hbs_expanders_log     = false;
var hbs_expanders_padding = 0;
//
//
function resizeFolds(){
    // get all expanders
    var expanders = document.querySelectorAll(hbs_expanders);
    // height of the window
    var availableHeight = window.innerHeight;
    // iterate each expander to apply the logic
    for(var i = 0 ; i<expanders.length; i++){
        // pointer to current expander (current in iteration)
        var expander = $( expanders[i] );
        // reset previous size
        expander.css("height","");
        // if the expander heigh is smaller than the availableheigh
        // expand it (if is bigger, just log)
        if( expander.css("height") < availableHeight ){
            if(hbs_expanders_log) console.log('Expanding Block', expander )
            expander.css("height", ( availableHeight - hbs_expanders_padding )+ "px");
        }else if(hbs_expanders_log) console.log('Ignoring Block', expander )
    }
    // done!
    return true;
}
//
// resize expanders on document ready & window resize
$( document ).ready( resizeFolds );
$( window ).resize( resizeFolds );
