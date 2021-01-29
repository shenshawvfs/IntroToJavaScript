// Copyright (C) 2021 Scott Henshaw
'use strict';

import Apple from "./Apple.js";

export default class Orchard {

    constructor( treeCount = 1 ) {

        this.treeCount = treeCount;
        this.appleList = [];
        this.appleList[0] = new Apple( 6 );
        this.appleList[1] = new Apple( 5, 100 );
    }
}