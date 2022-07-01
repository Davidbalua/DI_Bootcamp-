

function playTheGame(){
    let ans = confirm("Would you like to play the game?")
    if(ans == true){
        userNumber  = prompt("enter a number between 0 and 10");
        console.log(userNumber );
        if(userNumber  < 0 || userNumber  > 10 ){
            alert("Sorry Not a good number, Goodbye");
        } else if(isNaN(userNumber )){
            alert("Sorry Not a number, Goodbye");
        } else{
            alert("a number!");
            let computerNumber = Math.floor(Math.random() * 11);
            alert(computerNumber);
            compareNumbers(userNumber,computerNumber);
        }
    } else {
        alert("No problem, Goodbye");
    }
}

function compareNumbers(userNumber,computerNumber){
    alert(userNumber + computerNumber);
    for(let i = 1; i < 3; i++){
    if(userNumber == computerNumber){
        alert("Winner");
        break;
    } else if(userNumber > computerNumber){
        alert("Your number is bigger then the computer’s, guess again");
        userNumber  = prompt("enter a number between 0 and 10");
        

    } else{
        alert("Your number is smaller then the computer’s, guess again");
        userNumber  = prompt("enter a number between 0 and 10");
        
    }
}
alert("out of chances");

}

