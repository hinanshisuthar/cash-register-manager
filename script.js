//referencing the html elements that we need to use in js
const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#next-button");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const noOfNotes = document.querySelectorAll(".no-of-notes");

//array of the available notes
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

//we need to listen to a click event whenever the next button is clicked
nextButton.addEventListener("click", nextClickEventHandler);

function nextClickEventHandler(){ //100
    if(parseInt(billAmount.value)>0){ //if billAmount > 0 show the next div else throw an error
        document.getElementById("second").style.display="block";
        document.getElementById("error1").style.display="none";
    }
    document.getElementById("error1").innerText="Enter valid bill amount."; // error display
    }


// we need to listen to a click event when the check button is clicked
checkButton.addEventListener("click", CheckClickEventHandler);

function CheckClickEventHandler(){ //cash given = 110
    if(parseInt(billAmount.value) > 0 && parseInt(cashGiven.value) > 0){
    if(parseInt(billAmount.value)<parseInt(cashGiven.value)){ //proceed only if the bill amount < cash given
        document.getElementById("third").style.display="block";
        document.getElementById("error2").style.display="none";

        const amountToBeReturned = cashGiven.value - billAmount.value; // 110 - 100 = 10(amount to be returned)
        calculateChange(amountToBeReturned); //calculatechange (10)
    }
    else if(billAmount.value===cashGiven.value){
        document.getElementById("error2").innerText="No change is to be given.";
    } else {
    document.getElementById("error2").innerText="Enter valid bill amount and cash given to calculate";
    }
}
else {
    alert("please enter valid values")
}
}

function calculateChange(amountToBeReturned){ 
    for(let i = 0;i<availableNotes.length; i++){ // availableNotes.length = 7
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]); // = 10/2000 = 0
        amountToBeReturned %=  availableNotes[i]; //= 10%2000 =  0
        noOfNotes[i].innerText = numberOfNotes; // 0 2000 notes to be returned 
    } //loop will continue 7 times 
} 