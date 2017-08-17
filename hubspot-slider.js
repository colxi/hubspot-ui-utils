/*
*
* Hubspot-slider.js : Generates a Slider using the contents of the group boxes
* with the assigned class .hbs-slider . It works using the hubspot native jQuery
* and the jQuery.flexslider also native plugin.
*
* @Author               : colxi
* @Author website¡      : colxi.info
* @Date                 : 2017-08-16 20:35:21
* @Last Modified by     : colxi
* @Last Modified time   : 2017-08-17 20:35:21
*
*/


$(window).load(function() {
    // append DEFAULT SLIDER STYLES TO DOCUMENT HEAD
    var styles= "";
    styles += '<style>';
    // containers
    styles += '.hbs-slider-container{width:100%;position: relative;}';
    styles += '.hbs-slider-container>ul.slides{margin-top: 0px!important;position: relative;}';
    styles += '.hbs-slider-container .slides{margin-top: 0px!important;margin-left: -40px !important;}';
    // pagging
    styles += '.hbs-slider-container .flex-control-nav.flex-control-paging {text-align: center;margin-top: 10px;}';
    styles += '.hbs-slider-container .flex-control-nav.flex-control-paging>li {display: inline-block;}';
    styles += '.hbs-slider-container .flex-control-nav.flex-control-paging>li>a.flex-active {background: silver;}';
    styles += '.hbs-slider-container .flex-control-nav.flex-control-paging>li>a {display: inline-block; background: #f1f0f0;width: 40px;height: 10px;border-radius: 30px;margin-right: 10px;text-indent: -9999px;}';
    // navigation
    styles += '.hbs-slider-container .flex-direction-nav li {position: absolute;top: 40%;display: block;background: #484848;width: 70px; height: 70px;border-radius: 70px;text-align: center;padding-top:18px;}';
    styles += '.hbs-slider-container .flex-direction-nav li a { font-size: 1px;color: transparent;text-decoration: none;}';
    // nav:left
    styles += '.hbs-slider-container .flex-direction-nav li:nth-child(1) {left: -30px;}';
    styles += '.hbs-slider-container .flex-direction-nav li:nth-child(1) a{ border-top: 20px solid transparent;border-bottom: 20px solid transparent; border-right: 30px solid grey;margin-left: -15px; }';
    // nav:right
    styles += '.hbs-slider-container .flex-direction-nav li:nth-child(2) {right: -30px;}';
    styles += '.hbs-slider-container .flex-direction-nav li:nth-child(2) a{ border-top: 20px solid transparent;border-bottom: 20px solid transparent; border-left: 30px solid grey;margin-left: 5px; }';

    styles += '</style>';
    jQuery('head').append( jQuery(styles) );

    var container_html = '<div class="hbs-slider-container"><ul class="slides"></ul></div>';

    // FIND ALL ELEMENTS with the .hs-slider CLASS and initialize the SLIDERs (jQuery.flexslider)
    jQuery(".hbs-slider").each( function(c, hbs_slider){
        hbs_slider      = jQuery(hbs_slider);
        hbs_slider.append( container_html );
        var container   = hbs_slider.find('.hbs-slider-container');
        var items       = hbs_slider.children().not('.hbs-slider-container');
        items.appendTo( container.find('ul') );
        hbs_slider.find('ul.slides').children().wrap("<li class='slide'></li>");

        container.flexslider({
            animation: "slide"
        });
    });
});
