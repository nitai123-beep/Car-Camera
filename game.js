class Game{
constructor(){

}
getState(){
database.ref("gameState").on("value",(data)=>{
    gamestate = data.val();
})

}
updatestate(state){
database.ref('/').update({

    gameState:state
})

}
start(){
if(gamestate === 0){

player = new Player();
player.getCount();
form = new Form();
form.display();

}
car1 = createSprite(50,50,30,30);
car2 = createSprite(100,50,30,30);
cars = [car1,car2]
}
play(){

    form.hide();
    textSize(30);
    //text("gamestart",120,100)
    Player.getplayerinfo();
    if(allplayers !==undefined){

        var pos = 130
        var index = 0
        var x = 200
        var y;
        for(var plr in allplayers){
          index +=1
        
         y = displayHeight-allplayers[plr].distance 
         x+=50
          cars[index-1].x = x
          cars[index-1].y = y
          if (index ===player.index){

            cars[index-1].shapeColor="red"
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y;
          } 
        }
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance+=50;
player.update();

    }
}
}