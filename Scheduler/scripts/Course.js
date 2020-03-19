/**
 * @copyright: (C) 2020 Scott Henshaw.  All Rights Reserved.
 * @author:    Scott Henshaw {@link mailto:shenshaw@vfs.com}
 * @version:   1.0
 */
'use strict';

export default class Course {

    constructor( name, timeslot, day ) {
        this.timeslot = timeslot;
        this.name = name;
        this.day = day;
        this.place = "At Home";
        this.instuctor = "The best ever";
    }

    setLocation( location ) {
        this.place = location;
    }

    assignInstructor( instructorName ) {
        this.instuctor = instructorName;
    }
}