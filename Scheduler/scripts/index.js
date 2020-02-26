/**
 * App Main - ENTRY POINT
 *
 * @copyright: (C) 2014-2019 Kibble Online Inc in cooperation with Vancouver Film School.  All Rights Reserved.
 * @author:    Scott Henshaw {@link mailto:shenshaw@vfs.com}
 * @version:   1.1.0
 */
'use strict';

import App from './App.js';

// Wait for the DOM to finish loading (we don't want to reference things that don't exist)
document.addEventListener('DOMContentLoaded', event => {

    // Find out what we are running on
    const MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( navigator.userAgent );

    // Init the app and run it
    let app = new App( MOBILE );
    app.run()
});

