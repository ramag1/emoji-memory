/*----- constants -----*/
const totalMatchesInGrid = 2;


/*----- app's state (variables) -----*/
let matchTracker = 0;
let movesEvaluationArray = [];
let isFirstCard = true;


/*----- cached element references -----*/
const matchGrid = document.querySelector('#grid');
const resetBtn = document.querySelector('button');
let matchTrackerHeader = document.querySelector("h2");

/*----- event listeners -----*/
// matchGrid.addEventListener('click', selectCard1);
matchGrid.addEventListener('click', function (event) {
	checkIfFirstCard(event);
});
// resetBtn.addEventListener('click', init);

/*----- functions -----*/

// function init() {
	// sets matchGrid divs to first class only/clears out any 2nd classes from previous matches
	// }
	
// function modalWinner()

// function startGame() {
	// 	selectCard1();
	//     selectCard2(); //include evaluate, if no winner then calls moveOne, if winner then prompts modal
	// }

function checkIfFirstCard (evt) {
	if (isFirstCard) {
		selectCard1(evt);
	} else {
		selectCard2(evt);
	}
	isFirstCard = !isFirstCard;
}
console.log(isSecondCard);
 
function selectCard1 (evt) {
	//push class name of clicked element/card selected to moves array to change visual
	console.log(evt.target.classList);
	movesEvaluationArray[0] = evt.target.classList[0]; //both are showing an error that target is undefined, but it does get logged to array?
	// evt.stopImmediatePropagation(); // found stopImmProp to halt automatic double click i was seeing and try to allow for second click, but ceases to run any remaining event listeners https://stackoverflow.com/questions/33262256/add-click-event-after-another-click-event //
	// movesEvaluationArray.push(evt.target.getAttribute('class'));
	console.log(`this is moves array 0 output ${movesEvaluationArray[0]}`);
	// return; //could this signal the break of the function?
	// remove event listener?

	
} 

//need a solve for separating the clicks from each other as click 1 and click 2
function selectCard2 (evt) {
	movesEvaluationArray[1] = evt.target.classList[0];
	//push class name of clicked element/card selected to moves object to change visual
	// evt.target.classList.add('class2');
	console.log(` this is moves array 1 output ${movesEvaluationArray[1]}`);
	
	if (movesEvaluationArray[0] === movesEvaluationArray[1]) {
		console.log("match!")
		matchTracker++
		matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker}`
		if (matchTracker === totalMatchesInGrid) {
			// modalWinner()
		}
	} else {
		matchTrackerHeader.innerText = "Not a match"
		// movesArr.pop.pop() //clear out array to start over with new clicks
		// remove class2 from both divs (reverting back to original)
	}
}


// FIRST PASS AT PART TWO //
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


//  MISC THOUGHTS & STRETCH IDEAS  //
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