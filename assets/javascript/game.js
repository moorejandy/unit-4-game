//create a game start function:
//This fucnction will randomly select a number from 19-120 and push it to the random number box 
//It will also assign each crystal a random value between 1 to 12
//create variables for these functions

//create an onclick function:
//Create a function that pushes the value of each diamond that is clicked to the counter box and then adds that value to the 
//users total score.

//create a function that evaluates if the new total score is equal or not to the random score. if equal then win, if not equal
//then keep playing unless is greater than. Also create function that pushes wins and losses to the counter  

//create a game reset function that picks a new random nunber, assings new values to the crystals, and clears the total score box

// var goalArray = [19,20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
//     41, 42, 43, 44, 45, 46, 47, 48, 49 , 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,

var max = 120;
var min = 19;
var crystalMax = 12;
var crystalMin = 1;
var wins = 0;
var losses = 0;
var totalScore = 0;
var cystalScore = 0;
var checkWin = false;
var crystalScore = 0;
var goalNumber = 0;
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;

function randGoalSelection() {
    goalNumber = Math.floor(Math.random() * (max - min + 1) + min);
    crystalOne = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);
    crystalTwo = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);
    crystalThree = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);
    crystalFour = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);
    $("#image1").attr("value", this.crystalOne);
    $("#image2").attr("value", this.crystalTwo);
    $("#image3").attr("value", this.crystalThree);
    $("#image4").attr("value", this.crystalFour);
    $("#random-number").html(goalNumber);
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);

}

function gameWin(){
    alert("YOU WIN!!!");
    wins++;
    $("#wins-loss-text").text("Wins: " + wins + " " + "Losses: " + " " + losses);
    reset();
}

function gameLoss() {
    alert("YOU LOST");
    losses++;
    $("#wins-loss-text").text("Wins: " + wins + " " + "Losses: " + " " + losses);
    reset();
}

function reset(){

    // goalNumber = Math.floor(Math.random() * (max - min + 1) + min);
    // crystalOne = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);
    // crystalTwo = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);
    // crystalThree = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);
    // crystalFour = Math.floor(Math.random() * (crystalMax - crystalMin + 1) + crystalMin);
    totalScore = 0;
    $("#total-score").text("Your total score is:  " + totalScore);
    crystalScore = 0;
    $("#score-counter").text("Score of chosen crystal: " + crystalScore);
    randGoalSelection();

}

$("#image1").on("click", function () {
    crystalScore = crystalOne;
    totalScore = totalScore + crystalScore;
    // alert("New score: " + crystalScore);
    $("#total-score").text("Your total score is:  " + totalScore);
    $("#score-counter").text("Score of chosen crystal: " + crystalScore);
    console.log(totalScore);
    console.log(crystalScore);
    if (totalScore === goalNumber) {
        gameWin();
    }
        else if (totalScore > goalNumber){
            gameLoss();
        }
    }

)

    $("#image2").on("click", function () {
        crystalScore = crystalTwo;
        totalScore = totalScore + crystalScore;
        // alert("New score: " + crystalScore);
        $("#total-score").text("Your total score is:  " + totalScore);
        $("#score-counter").text("Score of chosen crystal: " + crystalScore);
        console.log(totalScore);
        console.log(crystalScore);
        if (totalScore === goalNumber) {
            gameWin();
            randGoalSelection(19, 120);
        }
            else if (totalScore > goalNumber){
                gameLoss();
                randGoalSelection(19, 120);
            }
        }
    )

        $("#image3").on("click", function () {
            crystalScore = crystalThree;
         totalScore = totalScore + crystalScore;
            // alert("New score: " + crystalScore);
            $("#total-score").text("Your total score is:  " + totalScore);
            $("#score-counter").text("Score of chosen crystal: " + crystalScore);
            console.log(totalScore);
            console.log(crystalScore);

            if (totalScore === goalNumber) {
                gameWin();
                randGoalSelection(19, 120);
            }
                else if (totalScore > goalNumber){
                    gameLoss();
                    randGoalSelection(19, 120);
                }
            }
        )
            $("#image4").on("click", function () {
                crystalScore = crystalFour;
                totalScore = totalScore + crystalScore;
                // alert("New score: " + crystalScore);
                $("#total-score").text("Your total score is:  " + totalScore);
                $("#score-counter").text("Score of chosen crystal: " + crystalScore);
                console.log(totalScore);
                console.log(crystalScore);

                if (totalScore === goalNumber) {
                    gameWin();
                    randGoalSelection(19, 120);
                }
                    else if (totalScore > goalNumber){
                        gameLoss();
                        randGoalSelection(19, 120);
                    }
                
            })
        
            randGoalSelection(19, 120);




            
