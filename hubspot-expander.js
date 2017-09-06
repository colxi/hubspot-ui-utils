/*
*
*
* @Author               : colxi
* @Author website¡      : colxi.info
* @Date                 : 2017-09-01 20:35:21
* @Last Modified by     : colxi
* @Last Modified time   : 2017-09-01 20:35:21
*
* Hubspot-expander.js : Expands those elements (normally used on group boxes) 
* with the assigned class .hbs-expander. It will expand the element to fit
* top and b ottom of the screen (generatin the fullscreen sensation) when the
* original size is smaller than the available height. When is bigger it just 
* doe sno action.
* It works using the hubspot native jQuery instance.
*
*/

// config
var hbs_expanders         = ".hbs-expand";
var hbs_expanders_log     = false;
var hbs_expanders_offset = 0;
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
            expander.css("height", ( availableHeight - hbs_expanders_offset )+ "px");
        }else if(hbs_expanders_log) console.log('Ignoring Block', expander )
    }
    // done!
    return true;
}
//
// resize expanders on document ready & window resize
$( document ).ready( resizeFolds );
$( window ).resize( resizeFolds );
