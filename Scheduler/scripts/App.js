/**
 * @copyright: (C) 2020 Scott Henshaw.  All Rights Reserved.
 * @author:    Scott Henshaw {@link mailto:shenshaw@vfs.com}
 * @version:   1.0
 */
'use strict';

import Schedule from "./Schedule.js";
import Course from "./Course.js";

// export ... = something that can be imported to another module
// ... default = the default thing to export can be imported without {}
//      ... class = an Object definition (not an instance of an Object), we can make more
export default class App {

	constructor() {

        // Initialize any app variables or code we will need
        this.mySchedule = new Schedule();
        let javaScriptCourse = new Course('JavaScript & jQuery', AM, "Thursaday");
        let designInterface = new Course('Interface Design', EVE, "Wednesday");

        javaScriptCourse.setLocation("Home");
        javaScriptCourse.assignInstructor("Scott");

        let scottsSchedule = generateEmptySchedule();
        let mardiasSchedule = generateEmptySchedule();

        // Initialize any event handlers
    }

	run() {
        // just waiting around for something to happen...
    }
}
