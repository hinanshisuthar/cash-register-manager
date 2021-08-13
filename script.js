const billAmount = document.querySelector("#bill-amount");
const nextButton = document.querySelector("#next-button");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const noOfNotes = document.querySelector(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", nextClickEventHandler);

function nextClickEventHandler(){
    if(billAmount.value>0){
        document.getElementById("second").style.display="block";
        document.getElementById("error1").style.display="none";
    }
    document.getElementById("error1").innerText="Enter valid bill amount.";
    }

checkButton.addEventListener("click", CheckClickEventHandler);

function CheckClickEventHandler(){
    if(billAmount.value<=cashGiven.value){
        // if(billAmount.value===cashGiven.value){
        //     document.getElementById("error2").innerText="No change is to be given.";
        // }
        document.getElementById("third").style.display="block";
        document.getElementById("error2").style.display="none";

        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateChange=(amountToBeReturned);
    }
    document.getElementById("error2").innerText="Enter valid bill amount and cash given to calculate";
}

function calculateChange(amountToBeReturned){
    for(let i = 0;i<availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %=  availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
} 