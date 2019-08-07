<?php $siteroot = 'C:/Users/smosher/source/repos/Games'; ?>
<!doctype html>
<html lang="en">
<?php require "$siteroot/includes/head.php"; ?>

<div id="wrapper">
<!-- Nav Element -->
<?php require "$siteroot/includes/header.php"; ?>

<!-- Body Element -->
<?php require "$siteroot/includes/body.php"; ?>

<div id="gameSetup">
    <!-- Input boxes to get # of players & names -->
    <h2>Game Setup</h2>
    How many players?
    <input type="text" id="numPlayerInputBox" size="2">
    <button id="nextButton" onclick="gameSetup()">Save</button> <!-- Save the value to a variable.  Also create & load player name entry boxes -->
    
    <div id="playerNameDiv">
        <div id="playerNameEntry">
        </div>
    </div>
</div>


<!-- Footer Element -->
<?php require "$siteroot/includes/footer.php"; ?>

<!-- Javascript Files Included -->
<script type="text/javascript" src="scripts/gamePlay.js"></script>
<script type="text/javascript" src="scripts/gameSetup.js"></script>
</div>


