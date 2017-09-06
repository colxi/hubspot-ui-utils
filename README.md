# hubspot-slider
Set of utilities and tools that can be imported to any hubspot template simply including to the header the reference to the script, and generally aplying a special class , on those elements wich need to be transformed.

### FILE DESCRIPTION AND USAGE

**Hubspot-slider.js** : Generates a Slider using the contents of the group boxes with the assigned class ```.hbs-slider```. It works using the hubspot native ```jQuery``` and the ```jQuery.flexslider``` also native plugin. Slider UI elements come with elemental CSS styling wich can be customized by overwriting.

**Hubspot-expander.js** : Expands those elements (normally used on group boxes)  with the assigned class ```.hbs-expander```. It will expand the element to fit top and b ottom of the screen (generatin the fullscreen sensation) when the original size is smaller than the available height. When is bigger it just does no action. It works using the hubspot native ```jQuery``` instance.
