const MAXPLAYERS = 6;
const MAXROUNDS = 25;

var playerArray = [];
var scoreArray = [[],[],[],[],[],[]];
var numPlayers = 0;
var round = 0;  // What is the current round?
var turnCounter = 1;   // How many turns have been done in each round

// Initialize the array & add 0's to everything.  Not used
function intializeArray() {
   
    for(var i = 0; i < numPlayers; i++) {
       for (var j = 0; j < 1; j++) {
           scoreArray[i][j] = 0;
       }
    }
}

// Just for testing the values
function displayArray() {
    for (var i = 0; i < numPlayers; i++) {
        
        for (var j = 0; j < round; j++) {
            console.log("Player:", playerArray[i], "Round:", j, "Score:", scoreArray[i][j]);
        }
    }
}

// Called when the user clicks "Save" after inputting the number of players
function gameSetup() {
    // Get the number of players
   getNumberOfPlayers();

    // Now get the user names
    getPlayerNames(numPlayers);

    // Initialize the array before the game starts
    intializeArray();
}

// Gets the number of players the user enters and returns it
function getNumberOfPlayers() {
   numPlayers = document.getElementById('numPlayerInputBox').value;
}

// Creates input boxes for player names
function getPlayerNames(numPlayers) {
    var playerNameDiv = document.getElementById('playerNameDiv');

    var playerNameEntryBox = document.getElementById('playerNameEntry');

    // If the div exists, remove it so we can remake it
    if (playerNameEntryBox != null) {
        document.getElementById('playerNameEntry').remove();
    }
 
    var nameDiv = document.createElement('div');
    nameDiv.setAttribute('id', 'playerNameEntry');

// Loop for creating input boxes for each player.
for (var i = 0; i < numPlayers; i++) {
    // Wrap them both in a div
    var playerNameEntryDiv = document.createElement('div');
    playerNameEntryDiv.setAttribute('id', 'p' + i + 'EntryBox');

    var nameText = document.createElement('p');
    nameText.setAttribute('id', 'player' + i + 'Name')
    nameText.textContent = 'Player ' + (i + 1) + ":";
    var nameInputBox = document.createElement('input');
    nameInputBox.setAttribute('type', "text");
    nameInputBox.setAttribute('id', 'player' + i + 'InputBox');

    // Attach the 
    // Now attach it to the main section
    playerNameEntryDiv.appendChild(nameText);
    playerNameEntryDiv.appendChild(nameInputBox);

    nameDiv.appendChild(playerNameEntryDiv);
}

playerNameDiv.appendChild(nameDiv);

// Now create the button to save the names
var saveButton = document.createElement('button');
saveButton.setAttribute('id', 'saveNamesButton');
saveButton.setAttribute('onclick', 'savePlayerNames()');
saveButton.innerHTML = 'Save Names';

nameDiv.appendChild(saveButton);
}

// Gets & saves the player names into the players array
function savePlayerNames(){
    for (var i = 0; i < numPlayers; i++) {
        // Get each element & then save the values
       var playerName = document.getElementById('player' + i + 'InputBox').value;
       playerArray[i] = playerName;
    }

    // Get the next sections ready
    createScoreCard();
    createPlayerListDropdown();
    addTableRow();
}

// Creates the header row with player names, and the totals row
function createScoreCard() {
    // Get top level div
    var scoresDiv = document.getElementById('scores');

    // Get the div that holds the table
    var originalScoresTableDiv = document.getElementById('scoresDisplayTable');

    // If the scorecard exists, remove it
    if (originalScoresTableDiv != null) {
        document.getElementById('scoresDisplayTable').remove();
    }
 
    // Now we're gonna create a new element for it.
    var scoresTableDiv = document.createElement('div')
    scoresTableDiv.setAttribute('id', 'scoresDisplayTable');

    var table = document.createElement('table');
    table.setAttribute('id', 'scoresTable');

    var tr = document.createElement('tr');

    var th = document.createElement('th');
    th.textContent = "Players:";

    tr.appendChild(th);
    table.appendChild(tr);
   

    // Now loop through the array to create the row of player names
    for (var i = 0; i < numPlayers; i++) {
            var playerName = document.createElement('th');

            playerName.textContent = playerArray[i];

            tr.appendChild(playerName);
    }

    var trTotals = document.createElement('tr');
    tr.setAttribute('id', 'totalsRow');

    table.appendChild(trTotals);

    var totalsLabel = document.createElement('th');
    totalsLabel.textContent = 'Totals';

    trTotals.appendChild(totalsLabel);

    // Now create the rows for the total scores
    for (var i = 0; i < numPlayers; i++) {
        var playerTotals = document.createElement('td');
        playerTotals.setAttribute('id','p' + i + 'Totals');

        // Set to 0, since the game hasn't started yet
        playerTotals.textContent = 0;
        trTotals.appendChild(playerTotals);
    }

    // Attach everything to the table
    scoresTableDiv.appendChild(table);
    scoresDiv.appendChild(scoresTableDiv);
}

// Creates the dropdown of all the player scores
function createPlayerListDropdown(){
    // Get the dropdown list
    var dropdownList = document.getElementById('playerNameDropdown');

     //  Remove all options currently attached to it.  Otherwise it'll keep adding to the list
     for (var i = dropdownList.options.length;  i >= 0; i--) {
        dropdownList.remove(i);
     }

    // Now loop through the players array & add the names
    for (var i = 0; i < numPlayers; i++) {
        var userNameOption = document.createElement('option');
        userNameOption.setAttribute('value', i);
        userNameOption.textContent = playerArray[i];
    
        dropdownList.appendChild(userNameOption);
    }

}

