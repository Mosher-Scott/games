<?php $siteroot = 'C:/Users/smosher/source/repos/Games'; ?>
<body>

    <!-- Game Setup Section -->
    <div id="gameSetup" class="visible">
        <!-- Input boxes to get # of players & names -->
        <h2>Game Setup</h2>
        <hr>
        How many players?
        <input type="text" id="numPlayerInputBox" size="2">
        <button id="nextButton" onclick="gameSetup()">Save</button> <!-- Save the value to a variable.  Also create & load player name entry boxes -->
        <hr>
        <div id="playerNameDiv" class="visible">
            <div id="playerNameEntry">
            </div>
        </div>
    </div>

    <!-- Elements to enter the score goes here -->
    <div id="scoreEntryDiv" class="visible">
        <select id="playerNameDropdown">
            <option value="default">Choose A Player</option>
        </select>
        Enter Score:<input type="text" id="scoreInputBox">
        <button id="submitScore">Submit</button>
    </div>
    
      <!-- Scores are shown here -->
    <div id="scores" class="visible">
    <hr>
        <div id="scoresTitle">
        <h2>Scores</h2>
        </div>

        <div id="scoresDisplayTable">
        
        </div>
    </div>  

</body>