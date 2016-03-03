# Tech Memory

## Technologies
Tech Memory is built using the following technologies:

1. HTML
1. jQuery
1. [Font-Awesome](https://fortawesome.github.io/Font-Awesome/) for the icons

## Approach Taken
1. Create an array to store all the icons. There are 12 pairs.
1. Randomly shuffle the icons in the array.
1. For each icon in the array, create each tile as a div within the "memory_board" div.
1. Allow each user to click only up to 2 tiles at a time.
1. If the 2 tiles match, add the player's colour to them, update the score and keep track of the number of tiles uncovered. Let the same player continue playing.
1. If the 2 tiles do not match, switch players. Cover back the tiles after 700 ms.
1. When all the tiles have been clicked, present the score in a dialog box and reset the game.

## Instructions
1. When the page loads, Player 1 always starts first as indicated by his label being shown in red. Player 1 can click any 2 tiles to display the respective icons.
1. If this results in a match, Player 1 continues playing.
1. If not, it is now Player 2's turn. Similarly, Player 2 keeps his/her turn as long as he/she continues uncovering matches.
1. The relevant scores are updated during gameplay.
1. If you want to reset the game at anytime, click on the reset button.
1. The game ends when all tiles have been uncovered. 

## Link to the Game
* [Project 1 - Memory Game](http://charlesguo.github.io/memory-game)
