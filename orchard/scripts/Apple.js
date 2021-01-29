// Copyright (C) 2021 Scott Henshaw
'use strict';

import Fruit from './Fruit.js'

export default class Apple extends Fruit {

    constructor( theSize = 4, seedCount = 0 ) {
        super( theSize, seedCount, "Red")
    }
}