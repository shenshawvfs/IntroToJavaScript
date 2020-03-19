/**
 * @copyright: (C) 2020 Vancouver Film School.  All Rights Reserved.
 * @author:    Your Name {@link mailto:ddXXname@vfs.com}
 * @version:   1.0
 */
'use strict';

import App from './App.js';

const AM = 0;
const PM = 1;
const EVE = 2;
const DAYS = ["Monday","Tuesday", "Wednesday", "Thursday", "Friday"];

let theSchedule = [];  // list of courses

class Course {

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

let javaScriptCourse = new Course('JavaScript & jQuery', AM, "Thursaday");
let designInterface = new Course('Interface Design', EVE, "Wednesday");

javaScriptCourse.setLocation("Home");
javaScriptCourse.assignInstructor("Scott");


let course = {
    timeslot: AM,
    name:"JavaScript",
    place:"At Home",
    instuctor: "The best ever",
}

function generateEmptySchedule() {

    let aSchedule = [];

    //for (let aDay of DAYS) {
    for (let i in DAYS) {
        //for (let i = 0; i < DAYS.length; i++) {
            //theSchedule[aDay] = []; // timeslots like AM, PM, EVE
            aSchedule[ DAYS[i] ] = [];
        }

    return aSchedule;
}

let scottsSchedule = generateEmptySchedule();
let mardiasSchedule = generateEmptySchedule();


(function Main(){

    // Wait for the DOM to finish loading (we don't want to reference things that don't exist)
    document.addEventListener('DOMContentLoaded', event => {

        // Init the app and run it
        let app = new App();
        app.run()
    })
})()

