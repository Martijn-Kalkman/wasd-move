"use strict";

let canvasWidth = 1500;
let canvasHeight = 1000;

//shroom
let sourceX = 520;
let sourceY = 120;
let marioWidth = 18;
let marioHeight = 18;

let marioX = 10;
let marioY = 50;

let marioSpeedX = 10;
let marioSpeedY = 0;

//oegaboogaman
let oegaboogamansourceX = 170;
let oegaboogamansourceY = 280;
let oegaboogamanWidth = 60;
let oegaboogamanHeight = 40;

let oegaboogamanX = 10;
let oegaboogamanY = 150;

let oegaboogamanSpeedX = 15;
let oegaboogamanSpeedY = 0;

//coopacape
let coopacapesourceX = 569;
let coopacapesourceY = 323;
let coopacapeWidth = 30;
let coopacapeHeight = 25;

let coopacapeX = 12;
let coopacapeY = 250;

let coopacapeSpeedX = 12;
let coopacapeSpeedY = 0;

//spook
let spooksourceX = 8;
let spooksourceY = 120;
let spookWidth = 18;
let spookHeight = 18;

let spookX = 10;
let spookY = 350;

let spookSpeedX = 18;
let spookSpeedY = 0;



window.onload = function() {

  let sheet = new Image();   // maak nieuw img element

  let canvas = document.getElementById("mario");
  let ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false; // voorkom antialias effect

  var gameLoop = function(){
    // maak canvas leeg
    ctx.fillStyle = "#9999ee";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    marioX += marioSpeedX;
    marioY += marioSpeedY;

    oegaboogamanX += oegaboogamanSpeedX;
    oegaboogamanY += oegaboogamanSpeedY;

    coopacapeX += coopacapeSpeedX;
    coopacapeY += coopacapeSpeedY;

    spookX += spookSpeedX;
    spookY += spookSpeedY;

    if(marioX > canvasWidth){
      marioX = 0;
    }

    if(oegaboogamanX > canvasWidth){
      oegaboogamanX = 0;
    }

    if(coopacapeX > canvasWidth){
      coopacapeX = 0;
    }

    if(spookX > canvasWidth){
      spookX = 0;
    }

    // teken
    ctx.drawImage(sheet, sourceX, sourceY, marioWidth, marioHeight, marioX, marioY, 64, 64);
    ctx.drawImage(sheet, oegaboogamansourceX, oegaboogamansourceY, oegaboogamanWidth, oegaboogamanHeight, oegaboogamanX, oegaboogamanY, 94, 94);
    ctx.drawImage(sheet, coopacapesourceX, coopacapesourceY, coopacapeWidth, coopacapeHeight, coopacapeX, coopacapeY, 64, 64);
    ctx.drawImage(sheet, spooksourceX, spooksourceY, spookWidth, spookHeight, spookX, spookY, 64, 64);


    // blijf loopen...
    requestAnimationFrame(gameLoop);
  }

  // als spritesheet is geladen, start dan gameloop
  sheet.addEventListener('load', function(){
    requestAnimationFrame(gameLoop);
  }, false);

  // zet bronbestand van plaatje. De browser begint na dit commando
  // naar het plaatje te zoeken en zal proberen het te laden. als dat gelukt is
  // wordt de event handler op regel 45 aangeroepen
  sheet.src = 'img/sheet.png';
};