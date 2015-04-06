var queenAttack = function(queen, attack) {

    var x = [];
    var y = [];

    if(queen[0] === attack[0]) {
        return true;
    }
    if(queen[1] === attack[1]){
        return true;
    }
    if(Math.abs(queen[0]-attack[0]) === (Math.abs(queen[1]-attack[1]))) {
        return true;
    }
    else return false;
 };
