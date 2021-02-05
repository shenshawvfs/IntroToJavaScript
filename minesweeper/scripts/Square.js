// Copyright (C) 2021 Scott Henshaw
'use strict';

export default class Square {

    constructor() {

        this._hasMine = false;
        this.adjacentMines = 0;
        //this.location
        this.mine = null;  // new Mine();
    }

    get hasMine() {
        return this._hasMine
    }
}