class Player{
constructor(){
this.index = null;
this.distance = 0;
this.name = null;
}
getCount(){
database.ref("playerCount").on("value",(data)=>{
playercount = data.val();
})

}

updateCount(count){
database.ref("/").update({
    playerCount:count
})

}
update(){
var playerIndex = "players/player"+this.index
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
})

}
static getplayerinfo(){
database.ref("players").on ("value",data=>{
  allplayers = data.val();  
})

}
}