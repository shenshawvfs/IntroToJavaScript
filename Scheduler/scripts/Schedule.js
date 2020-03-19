/**
 * @copyright: (C) 2020 Scott Henshaw.  All Rights Reserved.
 * @author:    Scott Henshaw {@link mailto:shenshaw@vfs.com}
 * @version:   1.0
 */
'use strict';

const AM = 0;
const PM = 1;
const EVE = 2;
const DAYS = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday"];

export default class Schedule {

    constructor() {
        this.theSchedule = [];  // list of courses
        this.generateEmptySchedule();
    }

    generateEmptySchedule() {

        let aSchedule = [];

        //for (let aDay of DAYS) {
        for (let i in DAYS) {
        //for (let i = 0; i < DAYS.length; i++) {
            //theSchedule[aDay] = []; // timeslots like AM, PM, EVE
            aSchedule[ DAYS[i] ] = [];
        }

        return aSchedule;
    }

    addCourse( course ) {
        // add it to the schedule on a certain day and timeslot
        // check to see if thte timeslot is empty
        // add course object to timeslot in this.theSchedule
    }
}