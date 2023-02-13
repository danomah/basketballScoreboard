// Get value beneath "HOME" and assign it to variable with name "homeScore"
let homeScore = document.getElementById("homeScore");
// Assign the value "zero" to variable with name "homeScoreValue"
let homeScoreValue = 0;

// Get value beneath "GUEST" and assign it to variable with name "guestScore"
let guestScore = document.getElementById("guestScore");
// Assign the value "zero" to variable with name "guestScoreValue"
let guestScoreValue = 0;

// HOME SCORE FUNCTIONS //

function addOneHome(){
    // increment the home score value by one
    homeScoreValue++;
    // display the home score value
    homeScore.textContent = homeScoreValue;
}

function addTwoHome(){
    homeScoreValue+= 2;
    homeScore.textContent = homeScoreValue;
}

function addThreeHome(){
    homeScoreValue+= 3;
    homeScore.textContent = homeScoreValue;
}

// GUEST SCORE FUNCTIONS //

function addOneGuest(){
    guestScoreValue++;
    guestScore.textContent = guestScoreValue;
}

function addTwoGuest(){
    guestScoreValue+=2;
    guestScore.textContent = guestScoreValue;
}

function addThreeGuest(){
    guestScoreValue+=3;
    guestScore.textContent = guestScoreValue;
}

// NEW GAME BUTTON //

function newGame(){
    homeScoreValue = 0;
    guestScoreValue = 0;
    homeScore.textContent = homeScoreValue;
    guestScore.textContent = guestScoreValue;


}