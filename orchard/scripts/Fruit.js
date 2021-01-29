// Copyright (C) 2021 Scott Henshaw
'use strict';

export default class Fruit {

    constructor( theSize = 4, seeds = 0, colour = "Black" ) {

        this.__private__ = {

            size: theSize,
            seedCount: seeds
        }
        this.sizeToo = 5;
        this.colour = colour;
    }

    get size() { return this.__private__.size }
    set size( value ) { this.__private__.size = value }

    hasSeeds() {

        const my = this.__private__;
        return (my.seedCount === 0)
    }

    seedCount( updatedCount ) {

        const my = this.__private__;
        if (updatedCount === undefined)
            return my.seedCount;

        my.seedCount = updatedCount;
        return my.seedCount;
    }
}