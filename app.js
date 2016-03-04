/*global $, document*/

var Array;
var memory_array = ['<i class="fa fa-instagram"></i>',
                    '<i class="fa fa-instagram"></i>',
                    '<i class="fa fa-reddit"></i>',
                    '<i class="fa fa-reddit"></i>',
                    '<i class="fa fa-tumblr"></i>',
                    '<i class="fa fa-tumblr"></i>',
                    '<i class="fa fa-amazon"></i>',
                    '<i class="fa fa-amazon"></i>',
                    '<i class="fa fa-youtube-square"></i>',
                    '<i class="fa fa-youtube-square"></i>',
                    '<i class="fa fa-yelp"></i>',
                    '<i class="fa fa-yelp"></i>',
                    '<i class="fa fa-spotify"></i>',
                    '<i class="fa fa-spotify"></i>',
                    '<i class="fa fa-pinterest-square"></i>',
                    '<i class="fa fa-pinterest-square"></i>',
                    '<i class="fa fa-github-alt"></i>',
                    '<i class="fa fa-github-alt"></i>',
                    '<i class="fa fa-apple"></i>',
                    '<i class="fa fa-apple"></i>',
                    '<i class="fa fa-facebook-square"></i>',
                    '<i class="fa fa-facebook-square"></i>',
                    '<i class="fa fa-google"></i>',
                    '<i class="fa fa-google"></i>'];

var memory_values = [];
var memory_tiles = [];
var memory_tile_ids = [];
var tiles_clicked = 0;
var tiles_flipped = 0;
var current_player_1;
var score_player_1 = 0;
var score_player_2 = 0;
var tile_1;
var tile_2;
var end_message;

Array.prototype.memory_tile_shuffle = function () {
    var i;
    var j;
    var temp;
    for (i = this.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function originalHeaders() {
    $("#player1-header").css("color", "#d88189");
    $("#player2-header").css("color", "black");
}

function swapHeaders() {
    $("#player1-header").css("color", "black");
    $("#player2-header").css("color", "#d88189");
}


function clearArrays() {
    memory_values = [];
    memory_tiles = [];
    memory_tile_ids = [];
}

function updateScore() {
  $("#p1-num-pairs").html(score_player_1);
  $("#p2-num-pairs").html(score_player_2);
}

function newBoard(){
  $('#memory_board').html("");
  tiles_flipped = 0;
  current_player_1 = true;
  score_player_1 = 0;
  score_player_2 = 0;
  originalHeaders();

  memory_array.memory_tile_shuffle();


	for(var i = 0; i < memory_array.length; i++){
    var div = document.createElement('div');
    var idValue = 'tile' + i;
    div.setAttribute('id', idValue);
    div.setAttribute('data-icon', memory_array[i]);
    document.getElementById('memory_board').appendChild(div);
	}

  $('#memory_board > div').on('click', function () {
    tiles_clicked ++;

    if (tiles_clicked <= 2) {
        $(this).css("background-color", "#b5d881");
        var icon = $(this).attr('data-icon');
        $(this).html(icon);
        var tile_id = $(this).attr('id');

        memory_values.push(icon);
        memory_tiles.push($(this));
        memory_tile_ids.push(tile_id);
        console.log(memory_tile_ids);
    }

    if (tiles_clicked === 2) {
        if(memory_values[0] == memory_values[1] && memory_tile_ids[0] != memory_tile_ids[1]){

          tiles_flipped += 2;

          if(current_player_1) {
              score_player_1 ++;
              memory_tiles[0].css("background-color", "#d081d8");
              memory_tiles[1].css("background-color", "#d081d8");
          } else {
              score_player_2 ++;
              memory_tiles[0].css("background-color", "#81b5d8");
              memory_tiles[1].css("background-color", "#81b5d8");
          }

          updateScore();
          clearArrays();
          tiles_clicked = 0;

          if(tiles_flipped == memory_array.length){

            if (score_player_1 > score_player_2) {
                end_message = "Player 1 won with " + score_player_1 + " pairs! Generating new board";
            } else if (score_player_1 < score_player_2) {
                end_message = "Player 2 won with " + score_player_2 + " pairs! Generating new board";
            } else {
                end_message = "It's a tie!";
            }

            setTimeout(alert(end_message), 700);

  					newBoard();
  				}

        } else {

          setTimeout(flip2Back, 700);

        }

      }

  })

}

function flip2Back() {
      tiles_clicked = 0;

      // Flip the 2 tiles back over
      memory_tiles[0].css("background-color", "#d8d081");
      memory_tiles[1].css("background-color", "#d8d081");
      memory_tiles[0].html("");
      memory_tiles[1].html("");

      // Switch player
      current_player_1 = !current_player_1;

      // show whose turn is next
      if(current_player_1) {
          originalHeaders();
        } else {
          swapHeaders();
        }

      clearArrays();
}

$(document).ready(newBoard);

$("#resetButton").on("click", newBoard);
