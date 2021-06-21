function getOrientation() {

    // if window.orientation is available...
    if( window.orientation && typeof window.orientation === 'number' ) {

        // ... and if the absolute value of orientation is 90...
        if( Math.abs( window.orientation ) == 90 ) {

              // ... then it's landscape
              return 'landscape';

        } else {

              // ... otherwise it's portrait
              return 'portrait';

        }

    } else {

        return false; // window.orientation not available

    }

}
window.addEventListener("orientationchange", function() {

    // if orientation is landscape...
    if( getOrientation() === 'landscape' ) {

        // ...do your thing
        href="#zatemnenie"
   }

}, false);