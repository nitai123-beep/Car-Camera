class Form{
constructor(){
    this.input = createInput("name");
    this.button = createButton("play");
    this.greeting = createElement("h2");
}
hide(){
this.greeting.hide();
this.button.hide();
this.input.hide();

}
display(){
var title = createElement ("h2");
title.html("Car Racing Game!");
title.position(displayWidth/2,0);
this.input.position(displayWidth/2,displayHeight/2);
this.button.position(displayWidth/2,displayHeight/2+50);
this.button.mousePressed(()=>{
player.name = this.input.value();
playercount+=1;
player.index = playercount;
player.update(player.name);
player.updateCount(playercount);
this.greeting.html("Hello!" +player.name);
this.greeting.position(displayWidth/2,displayHeight/2);
this.input.hide();
this.button.hide();

});

}

}

// => this desen't work with properties