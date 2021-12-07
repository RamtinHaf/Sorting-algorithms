let mergesortArray = [];
var chosenValueMergesort;

let cancan = document.getElementsByTagName("CANVAS");

function mergeSortStartup() {
    chosenValueMergesort = document.getElementById("number-merge").value;
    if (chosenValueMergesort > 70 || chosenValueMergesort < 0) {
        document.getElementById("merge-number").innerHTML = "Sorry, invalid number";
        document.getElementById("number-merge").value = "";
        document.getElementById("mergesort-array").textContent = "";
    } else {
        console.log("User choose", chosenValueMergesort, "number")
        document.getElementById("merge-number").innerHTML = "User has chosen " + chosenValueMergesort + " random numbers (0 - 500) to sort: ";

        // max 500 random numbers
        mergesortArray = Array.from({ length: chosenValueMergesort }, () => Math.floor(Math.random() * 501));
        console.log(mergesortArray);
        // displaying the array in DOM
        let mergesortArray_String = mergesortArray.map(String);
        console.log(mergesortArray_String);

        document.getElementById("mergesort-array").textContent = mergesortArray_String;
        document.getElementById("number-merge").value = ""
    }
}