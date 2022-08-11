function soma(a,b){
    return a + b;
}

function multi(a,b){
    return a * b;
}

var x = 10;
var y = 20;

if(x > y){
    var result = soma(x,y);

}else{
    var result = multi(x,y);
}

console.log(result);