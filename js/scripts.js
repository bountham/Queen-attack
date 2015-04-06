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
    function possible(element) {
        return element > 0 && element <= 8;
    }

 $(document).ready(function() {

     $("form#queen-attack").submit(function(event){
         $("#error").empty();
         var queen_row = parseInt($('#queen_row').val());
         var queen_col = parseInt($('#queen_col').val());
         var attack_row = parseInt($('#attack_row').val());
         var attack_col = parseInt($('#attack_col').val());

         var queen = [queen_row, queen_col];
         var attack = [attack_row, attack_col];

         if (!queen.every(possible)){
             $("#error").prepend("<p>This move is not possible</p>");
         }

         if (!attack.every(possible)){
             $("#error").prepend("<p>This move is not possible</p>");
         }


         if (queen.every(possible) && attack.every(possible)) {
      $("#not").empty();
      if (!queenAttack(queen, attack)) {
        $("#not").text("not");
      }

      $("#result").show();
    }

    event.preventDefault();
  });


});
