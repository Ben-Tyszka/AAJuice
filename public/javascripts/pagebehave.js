/**
 * Created by Ben on 9/17/2016.
 */
$(document).ready(function() {
    $('#fullscreen').fullpage({
        sectionsColor: ['#fff', '#ff3300', '#80ffff', '#80ffff', '#fff'],
        anchors: ['intro', 'about', 'labor', 'order', 'info'],
        scrollingSpeed: 1000
    });
    $("#section1").attrchange({
        trackValues: true, /* Default to false, if set to true the event object is
         updated with old and new value.*/
        callback: function (event) {
            //event               - event object
            //event.attributeName - Name of the attribute modified
            //event.oldValue      - Previous value of the modified attribute
            //event.newValue      - New value of the modified attribute
            //Triggered when the selected elements attribute is added/updated/removed
            if(event.newValue == "section fp-section fp-table active"){
                //Trigger animation
                console.log("animation!");
                $("#title2").css("animation-duration", "1.3s");
                $("#title2").css("animation-name", "slideinright");
            }
        }
    });
    $("#section3").attrchange({
        trackValues: true, /* Default to false, if set to true the event object is
         updated with old and new value.*/
        callback: function (event) {
            //event               - event object
            //event.attributeName - Name of the attribute modified
            //event.oldValue      - Previous value of the modified attribute
            //event.newValue      - New value of the modified attribute
            //Triggered when the selected elements attribute is added/updated/removed
            if(event.newValue == "section fp-section fp-table active"){
                //Trigger animation
                console.log("animation!");
                $("#title3").css("animation-duration", "1.3s");
                $("#title3").css("animation-name", "slideinright");
                $("#price").css("animation-duration", "1.7s");
                $("#price").css("animation-name", "slidedown");
            }
        }
    });
    $("#section4").attrchange({
        trackValues: true, /* Default to false, if set to true the event object is
         updated with old and new value.*/
        callback: function (event) {
            //event               - event object
            //event.attributeName - Name of the attribute modified
            //event.oldValue      - Previous value of the modified attribute
            //event.newValue      - New value of the modified attribute
            //Triggered when the selected elements attribute is added/updated/removed
            if(event.newValue == "section fp-section fp-table active"){
                //Trigger animation
                console.log("animation!");
                $("#la").css("animation-duration", "1.3s");
                $("#la").css("animation-name", "slideinright_mod");
            }
        }
    });
});
