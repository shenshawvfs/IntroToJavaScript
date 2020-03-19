/**
 * @copyright: (C) 2020 Vancouver Film School.  All Rights Reserved.
 * @author:    Your Name {@link mailto:ddXXname@vfs.com}
 * @version:   1.0
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
