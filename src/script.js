let quicksortArray = [];
var chosenValueQuicksort;

function quicksortStartup() {
    chosenValueQuicksort = document.getElementById("number-quick").value;
    if (chosenValueQuicksort > 200 || chosenValueQuicksort < 0) {
        document.getElementById("quicksort-number").innerHTML = "Sorry, invalid number";
        document.getElementById("number-quick").value = "";
        document.getElementById("quicksort-array").textContent = "";
    } else {
        console.log("User choose", chosenValueQuicksort, "number")
        document.getElementById("quicksort-number").innerHTML = "User has chosen " + chosenValueQuicksort + " random numbers (0 - 200) to sort: ";

        // max 200 random numbers
        quicksortArray = Array.from({ length: chosenValueQuicksort }, () => Math.floor(Math.random() * 201));
        console.log(quicksortArray);
        // displaying the array in DOM
        let quicksortArray_String = quicksortArray.map(String);
        console.log(quicksortArray_String);

        document.getElementById("quicksort-array").textContent = quicksortArray_String;
        document.getElementById("number-quick").value = ""
        setup()
    }
    // document.getElementById("quicksort-array").innerHTML = "Array: " + quicksortArray;
}
console.log(quicksortArray)
    // 
let states = [];

function setup() {
    createCanvas(600, 400)


    quicksortArray = Array.from({ length: chosenValueQuicksort }, () => Math.floor(Math.random() * 201));

    for (let i = 0; i < quicksortArray.length; i++) {
        states[i] = -1;
    }

    // Invoke QuickSort Function
    quicksortMain(quicksortArray, 0, quicksortArray.length - 1);
}

async function quicksortMain(arr, start, end) {
    // when all is done, return 
    if (start >= end) {
        // var finish = document.createElement("DIV");
        // finish.innerHTML = "QuickSort done!"
        // document.getElementById("quicksort-card").appendChild(finish);
        return;

    }

    // sorting each area 
    let index = await partition(arr, start, end);
    states[index] = -1;

    // Promise.all is used so that each function
    // should invoke simultaneously
    await Promise.all([quicksortMain(arr, start, index - 1),
        quicksortMain(arr, index + 1, end)
    ]);

}
// Asynchronous Definition of Partition Function
async function partition(arr, start, end) {

    for (let i = start; i < end; i++) {
        states[i] = 1;
    }

    let pivotIndex = start;
    let pivotValue = arr[end];
    states[pivotIndex] = 0;

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            await swap(arr, i, pivotIndex);
            states[pivotIndex] = -1;
            pivotIndex++;
            states[pivotIndex] = 0;
        }
    }

    await swap(arr, pivotIndex, end);

    for (let i = start; i < end; i++) {
        states[i] = -1;
    }

    return pivotIndex;
}
// Definition of Draw function
function draw() {

    // Set Background Color 
    background(3);

    for (let i = 0; i < quicksortArray.length; i++) {
        noStroke();
        if (states[i] == 0) {
            fill('#E0777D');
        } else if (states[i] == 1) {
            fill('#D6FFB7');
        } else {
            fill(255);
        }

        rect(i * 5, quicksortArray[i], 5, quicksortArray[i], 3);
    }
}

async function swap(arr, a, b) {

    // Call to sleep function
    await sleep(150);
    let t = arr[a];
    arr[a] = arr[b];
    arr[b] = t;
}

// Definition of sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// function draw(quicksortArray) {
//     background(0);

//     for (let i = 0; i < quicksortArray.length; i++) {
//         noStroke();
//         if (states[i] == 0) {
//             fill('#E0777D');
//         } else if (states[i] == 1) {
//             fill('#D6FFB7');
//         } else {
//             fill(255);
//         }
//         // rect(i * w, height - quicksortArray[i], w, quicksortArray[i]);
//     }
// }