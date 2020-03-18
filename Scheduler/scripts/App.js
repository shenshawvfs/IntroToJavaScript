/**
 * App Singleton
 *
 * @copyright: (C) 2014-2017 Kibble Games Inc in cooperation with Vancouver Film School.  All Rights Reserved.
 * @author:    Scott Henshaw {@link mailto:shenshaw@vfs.com}
 * @version:   2.1.0
 *
 * @summary:   Framework Singleton Class to contain a web app
 */
'use strict';

function iAmBothObsoleteAndModern( parameterOne, parameterTwo = 'Not Required') {

    let someValue = parameterOne + parameterTwo;
    return someValue
}

// export ... = this is something that can be imported to another module
// ... default = this is the default thing to export can be imported without {}
// ... class = this is an Object (not an instance of an Object), we can make more
export default class App {

	constructor( device = 'web') {

        // All we do is add a class to the body tag, one day some fancy css
        // will do great things with desktop and mobile devices because of this
        document.querySelector('body').classList.add( device );

        // Initialize any app variables or code we will need

        // Initialize any event handlers
    }

	run() {
        // just waiting around for something to happen...
    }
}
