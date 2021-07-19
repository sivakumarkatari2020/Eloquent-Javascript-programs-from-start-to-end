

function loop(init,condition,step,body){
    if(condition()){
        body(init);
        step(init);
    }
}

loop(

)

function init(step){
    return 0+step;
}

function condition(){
    if(condition){return true;}
    else{return false;}
}