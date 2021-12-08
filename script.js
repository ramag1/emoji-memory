/*----- constants -----*/
const totalMatchesInGrid = 2;
const divCount= 16; 

/*----- app's state (variables) -----*/
let matchTracker = 0;
let movesEvaluationArray = [];
let isFirstCard = true;
let firstCardSelectedId = [];
let firstCardIdEl;

/*----- cached element references -----*/
const matchGrid = document.querySelector('#grid'); //look into changing this to divs only.
const resetBtn = document.querySelector('button');
let matchTrackerHeader = document.querySelector("h2");

const div = document.querySelectorAll(".facedown");


/*----- event listeners -----*/
// matchGrid.addEventListener('click', selectCard1);
// matchGrid.addEventListener('click', function (event) {
// 	checkIfFirstCard(event);
// });
resetBtn.addEventListener('click', init);

for (let i = 0; i < divCount; i++) {
	div[i].addEventListener('click', function (event) {
		checkIfFirstCard(event);
	});
}


/*----- functions -----*/

// function init() {

	
	// function modalWinner()

function init() {	
	for (let i = 0; i < divCount; i++) {
		div[i].classList.remove(`${div[i].classList[2]}`);
	}	
	matchTracker = 0;
	matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker}`;
}
	
//per Tyler office hours, this function determines the control flow of the event listeners
function checkIfFirstCard (evt) { 
	if (isFirstCard) {
		selectCard1(evt);
	} else {
		selectCard2(evt);
	}
	isFirstCard = !isFirstCard;
}
	
		function selectCard1 (evt) {
			matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker}`;
			if (evt.target.classList[1] === 'matchOne') {
				evt.target.classList.add('matchOneFlip');
			} else if (evt.target.classList[1] === 'matchTwo') {
				evt.target.classList.add('matchTwoFlip');
			} else if (evt.target.classList[1] === 'matchThree') {
				evt.target.classList.add('matchThreeFlip');
			} else if (evt.target.classList[1] === 'matchFour') {
				evt.target.classList.add('matchFourFlip');
			} else if (evt.target.classList[1] === 'matchFive') {
				evt.target.classList.add('matchFiveFlip');
			} else if (evt.target.classList[1] === 'matchSix') {
				evt.target.classList.add('matchSixFlip');
			} else if (evt.target.classList[1] === 'matchSeven') {
				evt.target.classList.add('matchSevenFlip');
			} else if (evt.target.classList[1] === 'matchEight') {
				evt.target.classList.add('matchEightFlip');
			}
			movesEvaluationArray[0] = evt.target.classList[1]; 
				console.log(`This is moves array 0 output: ${movesEvaluationArray[0]}`);	
			
			firstCardSelectedId.push(evt.target.getAttribute("id"));
				console.log(`ID logged from first card: ${firstCardSelectedId}`);
			
			firstCardIdEl = document.getElementById(`${firstCardSelectedId[0]}`);
				console.log(`firstCardIdEl is ${firstCardIdEl}`);
} 
		
function selectCard2 (evt) {
	movesEvaluationArray[1] = evt.target.classList[1];
			if (evt.target.classList[1] === 'matchOne') {
				evt.target.classList.add('matchOneFlip');
			} else if (evt.target.classList[1] === 'matchTwo') {
				evt.target.classList.add('matchTwoFlip');
			} else if (evt.target.classList[1] === 'matchThree') {
				evt.target.classList.add('matchThreeFlip');
			} else if (evt.target.classList[1] === 'matchFour') {
				evt.target.classList.add('matchFourFlip');
			} else if (evt.target.classList[1] === 'matchFive') {
				evt.target.classList.add('matchFiveFlip');
			} else if (evt.target.classList[1] === 'matchSix') {
				evt.target.classList.add('matchSixFlip');
			} else if (evt.target.classList[1] === 'matchSeven') {
				evt.target.classList.add('matchSevenFlip');
			} else if (evt.target.classList[1] === 'matchEight') {
				evt.target.classList.add('matchEightFlip');
			}
console.log(`This is moves array 1 output: ${movesEvaluationArray[1]}`);

	if (movesEvaluationArray[0] === movesEvaluationArray[1]) {
		console.log("match!")
		matchTracker++
		matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker}`
		firstCardSelectedId.pop();
		if (matchTracker === totalMatchesInGrid) {
		// modalWinner()
		}
	} else {
		// setInterval(function () {
		// 	matchTrackerHeader.innerText = "Not a match" //add toggle here to flip back to the match count
		//reset the flipped cards to turned over 
		setTimeout(function () {
			evt.target.classList.remove(`${evt.target.classList[2]}`);
		}, 2000);
		setTimeout(function () {
			firstCardIdEl.classList.remove(`${firstCardIdEl.classList[2]}`);
		}, 2000);
		//clear out first card selected ID array
		firstCardSelectedId.pop();
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
			
// evt.stopImmediatePropagation(); // found stopImmProp to halt automatic double click i was seeing and try to allow for second click, but ceases to run any remaining event listeners https://stackoverflow.com/questions/33262256/add-click-event-after-another-click-event //
				



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

//  REQUIREMENTS  //
