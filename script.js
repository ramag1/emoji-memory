/*----- constants -----*/
const totalMatchesInGrid = 2;


/*----- app's state (variables) -----*/
let matchTracker = 0;

let moves = [
	
]


/*----- cached element references -----*/
const matchGrid = document.querySelector('#grid');
const resetBtn = document.querySelector('button');
let matchTrackerHeader = document.querySelector("h2");

/*----- event listeners -----*/
matchGrid.addEventListener('click', moveOne);
matchGrid.addEventListener('click', moveTwo);
// resetBtn.addEventListener('click', init);

/*----- functions -----*/

// function init() {
//     sets matchGrid divs to first class only/clears out any 2nd classes from previous matches
// }

function init(evt) {
	moveOne(evt);
    moveTwo(evt); //include evaluate, if no winner then calls moveOne, if winner then prompts modal
}

function moveOne (evt) {
	//assign class name of clicked element/card selected to moves object
	moves.push(evt.target.getAttribute('class'));
} 	

function moveTwo (evt) {
	//assign class name of clicked element/card selected to moves object
	moves.push(evt.target.getAttribute('class'));
	if (moves[0] === moves[1]) {
		matchTracker++
		matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker}`
	} else {
		matchTrackerHeader.innerText = "Not a match"
	}
}	// turn over players choice by adding 2nd class to the element selected
	// evt.target.classList.add('class2');

	console.log(moves)    
   
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