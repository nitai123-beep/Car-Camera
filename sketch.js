var ball;
var database;
var position;
var player,gamestate=0,form,game,playercount=0,allplayers;
var car1,car2,cars;
function setup(){
    createCanvas(displayWidth-20,displayHeight-200);
    database=firebase.database();
    game = new Game();
    game.getState();
    game.start();
}



function draw(){
    background("white");
   if(playercount === 2){

    game.updatestate(1)
   }
   if(gamestate===1){
clear ();
game.play();

   }
    drawSprites();
}