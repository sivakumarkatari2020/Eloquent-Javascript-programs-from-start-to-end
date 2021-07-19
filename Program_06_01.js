
class vec{
    constructor(X,Y){
        this.X = X;
        this.Y = Y;
    }

    plus(x,y){
        return `${this.X+x}i+${this.Y+y}j`;
    }

    minus(x,y){
        return `${this.X-x}i+${this.Y-y}j`;
    }

    get length(){
        return 
    }
}

let vector1 = new vec(3,4);

console.log(vector1.plus(4,-5));

console.log(vector1.minus(4,-5));
