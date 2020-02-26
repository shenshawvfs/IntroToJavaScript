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

export default class App {

	constructor( device = 'web') {

        document.querySelector('body').classList.add( device );
    }

	run() {
        // just waiting around for something to happen...
    }

}
