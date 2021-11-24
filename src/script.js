function quicksort() {
    var chosenValueQuicksort = document.getElementById("number-quick").value;
    if (chosenValueQuicksort > 200) {
        document.getElementById("quicksort-number").innerHTML = "Sorry, please choose no more than 200 random numbers to sort";
        document.getElementById("number-quick").value = "";
        document.getElementById("quicksort-array").textContent = "";
    } else {

        console.log("User choose", chosenValueQuicksort, "number")
        document.getElementById("quicksort-number").innerHTML = "User has choosen " + chosenValueQuicksort + " random numbers (0 - 200) to sort: ";
        let quicksortArray = Array.from({ length: chosenValueQuicksort }, () => Math.floor(Math.random() * 201));
        let quicksortArray_String = quicksortArray.map(String);
        console.log(quicksortArray_String);
        document.getElementById("quicksort-array").textContent = quicksortArray_String;
        document.getElementById("number-quick").value = ""
    }
    // document.getElementById("quicksort-array").innerHTML = "Array: " + quicksortArray;
}