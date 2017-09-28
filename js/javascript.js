console.log('running');
var winner;


$(document).ready(change_data);

function change_data(){
  console.log('Inside change_data');
  win_lose(true);
  console.log(winner);

  if (winner === 'winner!') {
  $('#data').append('someone\'s is a winner');
}
}


function win_lose(win_lose){
  if(win_lose) {winner = 'winner'; }
  if(!win_lose) {winner = 'not a winner - boo!'; }
}
