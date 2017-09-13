# hubspot-ui-utils

![](https://img.shields.io/badge/cdn-cdn.rawgit-green.svg)
![](https://img.shields.io/badge/poweredBy-jQuery-blue.svg)
![](https://img.shields.io/badge/Hubspot-on%20Steroids-orange.svg)


Set of utilities and tools that can be imported to any hubspot template by simply including to the header the reference to the script, and generally aplying a special class , on those elements wich need to be transformed, or are being targeted.

### FILE DESCRIPTION AND USAGE

**Hubspot-slider.js** : Generates a Slider using the contents of the group boxes with the assigned class ```.hbs-slider```. It works using the hubspot native ```jQuery``` and the ```jQuery.flexslider``` also native plugin. Slider UI elements come with elemental CSS styling wich can be customized by overwriting.
> <script src="https://cdn.rawgit.com/colxi/hubspot-ui-utils/master/hubspot-slider.js"></script>

**Hubspot-expander.js** : Expands those elements (normally used on group boxes)  with the assigned class ```.hbs-expander```. It will expand the element to fit top and b ottom of the screen (generatin the fullscreen sensation) when the original size is smaller than the available height. When is bigger it just does no action. It works using the hubspot native ```jQuery``` instance.
> <script src="https://cdn.rawgit.com/colxi/hubspot-ui-utils/master/hubspot-expander.js"></script>

**Hubspot-scroll-to.js** : Scans all the 'A' elements with the class ```.hbs-scroll-to```,  and applies a Smooth scroll to the element matching the jQuery selector placed in the HREF attribute. 
> <script src="https://cdn.rawgit.com/colxi/hubspot-ui-utils/master/hubspot-scroll-to.js"></script>

---
Developed under the umbrella of [Asmalljob](http://www.asmalljob.com)
