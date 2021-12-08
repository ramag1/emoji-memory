/*----- constants -----*/
const totalMatchesInGrid = 8;
 

/*----- app's state (variables) -----*/
let matchTracker = 0;
let movesEvaluationArray = [];
let isFirstCard = true;
let firstCardSelectedId = [];
let firstCardIdEl;
let matchIdArr =[];

/*----- cached element references -----*/
const matchGrid = document.querySelector('#grid'); 
const resetBtn = document.querySelector('button');
const div = document.querySelectorAll(".facedown");
let matchTrackerHeader = document.querySelector("h2");
const modalWinnerEl = document.querySelector("#modal")
const closeModalEl = document.querySelector("#close")

/*----- event listeners -----*/
//Reset board when clicked
resetBtn.addEventListener('click', init);
//Close winner modal when clicked
closeModalEl.addEventListener('click', closeModal);
//Log selected card when clicked
for (let i = 0; i < totalMatchesInGrid*2 ; i++) {
	div[i].addEventListener('click', function (event) {
		checkIfFirstCard(event);
	});
}

/*----- functions -----*/
//Winner modal
function openModal() {
	modalWinnerEl.style.display = 'block';
};

//Close modal
function closeModal() {
	modalWinnerEl.style.display = 'none';
};

//Resets the board to turned over cards after Reset button has been clicked
function init() {	
	for (let i = 0; i < totalMatchesInGrid*2 ; i++) {
		div[i].classList.remove(`${div[i].classList[2]}`);
	}	
	matchTracker = 0;
	matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker}`;
}

//Per Tyler office hours, this function determines the control flow of the event listeners so the clicks are not simulatenous
function checkIfFirstCard (evt) { 
	if (isFirstCard) {
		selectCard1(evt);
	} else {
		selectCard2(evt);
	}
	isFirstCard = !isFirstCard;
}

//Logs selected element from first click for later evaluation and reveals other side of card
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
	
	firstCardSelectedId.push(evt.target.getAttribute("id"));
	console.log(firstCardSelectedId)
	
	firstCardIdEl = document.getElementById(`${firstCardSelectedId[0]}`);
} 
//Logs selected element from second click, reveals other side of card, and executes match conditional, evalutes win state
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
	console.log(`this is card 2 ${evt.target.classList}`)


	if (matchIdArr.includes(evt.target.id)) {
		matchTrackerHeader.innerText = "You already made that match!";		
		setTimeout(function () {
			matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker}`}, 1500);	
		matchTracker = matchTracker
		
	}
	else if(movesEvaluationArray[0] === movesEvaluationArray[1] && evt.target.id !== firstCardSelectedId[0]) {
		console.log("match!")
		matchTracker++
		matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker}`
		matchIdArr.push(evt.target.id);
		matchIdArr.push(firstCardSelectedId[0]);
		console.log(matchIdArr)
		firstCardSelectedId.pop();
		if (matchTracker === totalMatchesInGrid) {
			openModal();
		}
	} else {
		setTimeout(function () {
			matchTrackerHeader.innerText = "Not a match"}, 10);
		setTimeout(function () {
			matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker}`}, 1980);
		//reset the flipped cards to turned over 
		setTimeout(function () {
			evt.target.classList.remove(`${evt.target.classList[2]}`);
		}, 2000);
		setTimeout(function () {
			firstCardIdEl.classList.remove(`${firstCardIdEl.classList[2]}`);
		}, 1980);
		firstCardSelectedId.pop();
	}
}




// 	} else {
// 		matchTrackerHeader.innerText = "Not a match";
// 		matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker}`
// 		evt.target.classList.remove(`${evt.target.classList[2]}`);
// 		firstCardIdEl.classList.remove(`${firstCardIdEl.classList[2]}`);
// 		firstCardSelectedId.pop();
// 	}
// }

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
