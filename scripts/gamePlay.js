// Event Handlers
document.getElementById("submitScore").addEventListener("click", recordScore);

// Allows the user to enter in a score
function recordScore(){

    // First get the value of the person selected from the dropdown
    var userDropdown = document.getElementById('playerNameDropdown');

    // Get the userId, which is the index value used in the scores array
    var userId = userDropdown.options[userDropdown.selectedIndex].value;

    // Get the user entered score
    var score = document.getElementById('scoreInputBox').value;
    
    // Record the score in the array
    scoreArray[userId][round] = score;
  
    // Need to track the number of players that roll the dice per round.  If the turnCounter matches the number of players, then round++, and turnCounter goes back to 1.
    if (turnCounter == numPlayers) {
        round++;
        turnCounter = 1;
        score = '';
    } else {
        turnCounter++;
        score = '';
    }

    // For testing.  Remove when it displays in the browser
    displayArray();
}