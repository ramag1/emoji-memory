/*----- constants -----*/
const totalMatchesInGrid = 2;

let moves = []

console.log(moves)

/*----- app's state (variables) -----*/
let matchTracker = 0;

/*----- cached element references -----*/
const matchGrid = document.querySelector('#grid');
const resetBtn = document.querySelector('button');

/*----- event listeners -----*/
matchGrid.addEventListener('click', moveOne);

// resetBtn.addEventListener('click', init);

/*----- functions -----*/

// function init() {
//     sets matchGrid divs to first class only/clears out any 2nd classes from previous matches
// }

// function playGame(event) {
// 	console.log('hello from the gameboard.');
// 	moveOne(event);
//     moveTwo(event); //include evaluate, if no winner then calls moveOne, if winner then prompts modal
// }

function moveOne(evt) {
    // console.log(evt.target.className);
	//assign class name of clicked element/card selected to moves object
	moves.push(evt.target.id);
	// turn over players choice by adding 2nd class to the element selected
	// evt.target.classList.add('class2');
    console.log(evt.target.id);
}    
//CAN THESE BE COMBINED SOMEHOW? 
//need a solve for separating the clicks from each other as click 1 and click 2

// function moveTwo(evt) {
// 	//assign class name of 2nd clicked element/card selected to moves object
// 	evt.target.className = MOVES.moveTwo.cardSelected;
// 	// turn over players choice by adding 2nd class to the element selected
// 	evt.target.classList.add('class2');
//     if (MOVES.moveOne.cardSelected !== MOVES.moveTwo.cardSelected) {
//         // remove class2 in grid
//         // MOVES.moveOne.cardSelected = "" to clear out existing plays
//         // MOVES.moveTwo.cardSelected = ""
//     } else {
//         matchTracker++;
//         if (matchTracker === totalMatchesInGrid) {
//             // modalWinner()
//         }
//     }
//     moveOne();
// }

// function modalWinner()


// Push div selected to array
// Check winner of div classes are changed
// If not matching toggle back to old div class
// Set timeout div that is longer than game

// While increment counter < pairs per page
// Click -> new class added 
// If click A (added class) === click B  (added class) then apply class 3, (match! Opaque)
// increment counter
// Otherwise remove class (on timer) so original class is showing again

// Click 1 - add class 2 and leave it, log in array for evaluation
// Click 2 - add class 2, log in array for evaluation
// Evaluate if (index 0 event target div class === index 1 event target div class)
//  Yes apply class 3 and increment
//  No remove class 2