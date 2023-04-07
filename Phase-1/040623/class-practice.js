function helloTests() {
    return "Hello Tests!";
}

class Actor{
    constructor(name = "Unkown"){
        this._health = 100;
        this._name = name;
        this._isActive = true;
    }

    damage(damageAmount){
        this._health -= damageAmount;
        if(this._health <= 0) this._isActive = false;
    }

    get name(){
        return this._name;
    }

    get health(){
        return this._health;
    }

    get isActive(){
        return this._isActive;
    }
}

module.exports = {helloTests, Actor};