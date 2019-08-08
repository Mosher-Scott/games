// Event Handlers
document.getElementById("submitScore").addEventListener("click", recordScore);

// Normal Gameplay
function gamePlay() {

}

// Allows the user to enter in a score
function recordScore(){

    // First get the value of the person selected from the dropdown
    var userDropdown = document.getElementById('playerNameDropdown');

    // Get the userId, which is the index value used in the scores array
    var userId = userDropdown.options[userDropdown.selectedIndex].value;

    // Get the user entered score
    var userScore = document.getElementById('scoreInputBox').value;

    var score = parseInt(userScore);
    
    // Record the score in the array
    scoreArray[userId][round] = score;
  
    // Need to track the number of players that roll the dice per round.  If the turnCounter matches the number of players, then round++, and turnCounter goes back to 1.
    if (turnCounter == numPlayers) {
        round++;
        turnCounter = 1;
        score = 0;
        addTableRow();
        addNewScoreArrayValues();
    } else {
        turnCounter++;
        score = 0;
    }

    // For testing.  Remove when it displays in the browser
   // displayArray();
    displayScores();
    displayTotalScores();
}

// Adds a row to the table
function addTableRow() {
    var table = document.getElementById('scoresTable');

    var row = table.insertRow(-1);
    
    var cellLabel = row.insertCell(0);
    
    // First row of scores
    if (round == 0) {
        cellLabel.textContent = "Round " + (round + 1);
    } else {
        cellLabel.textContent = "Round " + (round + 1);
    }

    var cellNumber = 1;
    // Loop to create the cells needed for each player & assign it 0
    for (var i = 0; i < numPlayers; i++) {
       
        var scoreCell = row.insertCell(cellNumber);
        scoreCell.setAttribute('id', 'p' + i + 'r' + round + 'score');
        scoreCell.innerText = 0;
        cellNumber++;
    }
}

// Add new element to the scores array with values of 0 
function addNewScoreArrayValues() {
    for (var i = 0; i < numPlayers; i++) {
        scoreArray[i][round] = 0;
    }

}

// Display player scores
function displayScores() {

    // Loop through the array per player, and put that score in the correct location in the table.
    for (var i = 0; i < numPlayers; i++) {

        // Now loop through that player cells and show the scores
        for (var j = 0; j < round; j++) {

            var cell = document.getElementById('p' + i + 'r' + j + 'score');

            console.log(cell);
            cell.innerText = parseInt(scoreArray[i][j]);
        }
    }
}

// Display total scores NEEDS HELP
function displayTotalScores() {

    var score = 0;
    // Loop through the array per player, and put that score in the correct location in the table.
    for (var i = 0; i < numPlayers; i++) {

        // Now loop through that player cells and show the scores
        for (var j = 0; j < round; j++) {

            score += parseInt(scoreArray[i][j]);
            console.log(score);
        }

        var cell = document.getElementById('p' + i + 'Totals');
        cell.innerText = score;
    }
}