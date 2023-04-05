class Actor {

    constructor(name = "Unkown", startX = 0, startY = 0){
        this._position = {'x': startX, 'y': startY};
        this._health = 100;
        this._name = name;
    }
}

class Player extends Actor{

    constructor(name = "Player Unkown", startX = 0, startY = 0){
        super(name, startX, startY);
        this._inventory = [0, 0];
        this._inCombat = false;
    }
}

class Enemy extends Actor{
    constructor(name = "Enemy Unkown", startX = 0, startY = 0, dialog = "I got nothing."){
        super(name, startX, startY);
        this._type = 0;
        this._isDead = false;
        this._dialog = dialog;
    }

    attackPlayer(){
        //TODO: Attack Player Logic
    }
}