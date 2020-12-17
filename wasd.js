


var canvas = document.querySelector('#canvas');
var context = canvas.getContext ('2d');

var xpos = 0;
var ypos = 0;


context.rect(xpos, ypos, 50, 50);
context.stroke();
function move(e) {

    let sourceX = 520;
    let sourceY = 120;
    let marioWidth = 18;
    let marioHeight = 18;

    let marioX = 10;
    let marioY = 50;

    let marioSpeedX = 10;
    let marioSpeedY = 0;


    //alert(e.keyCode);



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

    canvas.width=canvas.width;
    context.rect(xpos, ypos, 50, 50);
    context.stroke();
}

document.onkeydown = move;

window.onload = function() {

    let sheet = new Image();   // maak nieuw img element

    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false; // voorkom antialias effect

    var gameLoop = function(){
        // maak canvas leeg








        // teken
        ctx.drawImage(sheet, sourceX, sourceY, marioWidth, marioHeight, marioX, marioY, 64, 64);


    }

    // als spritesheet is geladen, start dan gameloope);
    // zet bronbestand van plaatje. De browser begint na dit commando
    // naar het plaatje te zoeken en zal proberen het te laden. als dat gelukt is
    // wordt de event handler op regel 45 aangeroepen
    sheet.src = 'img/sheet.png';
};