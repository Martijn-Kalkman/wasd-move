"use strict";

let canvasWidth = 1500;
let canvasHeight = 1000;
let sourceX = 520;
let sourceY = 120;
let marioWidth = 18;
let marioHeight = 18;

let xpos = 50;
let ypos = 50;

function move(e) {

    document.onkeydown = move;

    if(e.keyCode==68){
        xpos+=5;
    }
    if(e.keyCode==65){
        xpos-=5;
    }

    if(e.keyCode==83){
        ypos+=5;
    }

    if(e.keyCode==87){
        ypos-=5;
    }
}

document.onkeydown = move;

window.onload = function() {

    let sheet = new Image();   // maak nieuw img element

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.imageSmoothingEnabled = false; // voorkom antialias effect

    var gameLoop = function(){
        // maak canvas leeg
        context.fillStyle = "#9999ee";
        context.fillRect(0, 0, canvasWidth, canvasHeight);

        // teken
        context.drawImage(sheet, sourceX, sourceY, marioWidth, marioHeight, xpos, ypos, 64, 64);

        requestAnimationFrame(gameLoop);
    }

    // als spritesheet is geladen, start dan gameloop
    sheet.addEventListener('load', function(){
        requestAnimationFrame(gameLoop);
    }, false);

    // als spritesheet is geladen, start dan gameloope);
    // zet bronbestand van plaatje. De browser begint na dit commando
    // naar het plaatje te zoeken en zal proberen het te laden. als dat gelukt is
    // wordt de event handler op regel 45 aangeroepen
    sheet.src = 'sheet.png';
};
