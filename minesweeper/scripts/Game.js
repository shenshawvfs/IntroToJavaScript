// Copyright (C) 2021 Scott Henshaw
'use strict';

import Minefield from "./Minefield.js";

const DEFAULT_SIZE = 12;
const MINE_COUNT = 10;

export default class Game {

    constructor( size = DEFAULT_SIZE ) {
        // Create a game
        this.board = {
            size: size,
        };
        this.minefield = new Minefield( size, MINE_COUNT );
        this.gameOver = false;

        this.message = "Welcome to Minesweeper";
        document.querySelector("#test-button")
            .addEventListener('click', event => this.someLonghandler( event ));

        this.generateBoard();
        this.updateCellHandlers();
    }


    updateCellHandlers() {

        document.querySelectorAll(".square")
            .forEach( element => {

                element.addEventListener('click', event => {
                    // TODO: handle the user clicking one of the game map squares
                    // TODO: find the thing I clicked, so something to it
                    const id = event.target.id;

                    const classList = event.target.classList.add("hide")

                    // TODO: check if there is a mine here
                    // TODO: IF mine BOOM!!! Game Over

                    // TODO: IF no mine are there adjacent mines? if so show the count
                    // TODO: ELSE clear all non adjacent mine squares (0 adjacent)
                })
        })
    }

    someLonghandler( event ) {

        document.querySelector("#demo")
            .innerHTML = this.message;
    }

    run() {

        while (!this.gameOver) {

            this.update();
            this.render();
        }
    }

    update() {
        // get user input and update the game simulation
        // this.updateCellHandlers();
        this.gameOver = true;
    }

    render() {
        // change the DOM and the screen to show the player what's going on
        // generate the playfield
        // this.generateBoard();
    }

    generateBoard() {
        /*
        <table>
            <tr><td></td>...</tr>...
        </table>
        */
        let markup = "<table>";
        for (let row = 0; row < this.board.size; row++) {

            markup += "<tr>";
            for (let col = 0; col < this.board.size; col++ ) {

                const id = `square-${row}-${col}`;  // "square-4-5"
                markup += `<td id="${id}" class="square"><div class="unknown"></div></td>`;
            }
            markup += "</tr>";
        }

        markup += "</table>";

        // find the game area, attach this table
        document.querySelector("#game-screen").innerHTML = markup;
    }
}
