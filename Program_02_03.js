var num=16;
for(let i=0;i<num;i++){
    var string="";
    if(i%2==0){
        for(let j=0;j<num;j++){
            if(j%2==0){ string=string+" ";}
            else {string=string+'#';}
        }
    console.log(string);
    }
    else{
        for(let j=0;j<num;j++){
            if(j%2==0){string=string+'#';}
            else{string=string+" ";}
        }
    console.log(string);
    }
}