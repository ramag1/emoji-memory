/*----- constants -----*/
const totalMatchesInGrid = 8;
const divArray = [
	[0, ['facedown', 'matchOne']],
	[1, ['facedown', 'matchOne']],
	[2, ['facedown', 'matchTwo']],
	[4, ['facedown', 'matchThree']],
	[6, ['facedown', 'matchFour']],
	[8, ['facedown', 'matchFive']],
	[10, ['facedown', 'matchSix']],
	[12, ['facedown', 'matchSeven']],
	[14, ['facedown', 'matchEight']],
	[3, ['facedown', 'matchTwo']],
	[5, ['facedown', 'matchThree']],
	[7, ['facedown', 'matchFour']],
	[9, ['facedown', 'matchFive']],
	[11, ['facedown', 'matchSix']],
	[13, ['facedown', 'matchSeven']],
	[15, ['facedown', 'matchEight']],
];

/*----- app's state (variables) -----*/
//Increments each time match is recorded, to be evaluated against totalMatchesInGrid to declare winstate
let matchTracker = 0;
//Decrements total matches in grid each time match is recorded
let matchRemainingTracker = totalMatchesInGrid;
//Increments each time selections are evaluated
let matchAttempsTracker = 0;
//Records click 1 classList and click 2 classList, to be evalated against each other to check if match
let movesEvaluationArray = [];
//Set to true to call clickOne function, flips to false to call clickTwo function
let isFirstCard = true;
//Records click 1 id to referenced in firstCardIdEl
let firstCardSelectedId = [];
//Click 1 unique identifer to be referenced in order to remove added class upon "no match" evaluation
let firstCardIdEl;
//Logs ID of all matches to ensure no duplicate matches get counted towards score (cheating guardrail)
let matchIdArr = [];

/*----- cached element references -----*/
const resetBtn = document.querySelector('#reset');
const div = document.querySelectorAll('.facedown');
let matchTrackerHeader = document.querySelector('h2');
const modalWinnerEl = document.querySelector('#modal');
const closeModalEl = document.querySelector('#close');
const h2El = document.querySelector('h2');
const statusEl = document.querySelector('#status');
const modeBtn = document.querySelector("#modeBtn")
const matchGrid = document.querySelector('#grid');

/*----- event listeners -----*/
//Reset board when clicked
resetBtn.addEventListener('click', reset);
//Close winner modal when clicked
closeModalEl.addEventListener('click', closeModal);
//Swich from Emoji to Superhero theme
modeBtn.addEventListener("click", changeMode);

/*----- functions -----*/
//Winner modal
function openModal() {
	modalWinnerEl.style.display = 'block';
}
//Close modal
function closeModal() {
	modalWinnerEl.style.display = 'none';
	reset();
}

//Fisher Yates Randomizing Div function below- sourced from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function fisherYates(array) {
	var count = array.length,
	randomnumber,
	temp;
	while (count) {
		randomnumber = (Math.random() * count--) | 0;
		temp = array[count];
		array[count] = array[randomnumber];
		array[randomnumber] = temp;
	}
	return array;
}

//Change Mode to Superhero- support from Melissa and Landon on implementation
function changeMode() {
  if (mode.getAttribute('href') == `style.css`) {
    mode.setAttribute('href', `style2.css`);
	modeBtn.innerHTML = `Play Emoji Game`;
	reset();
  } else {
    // if it's not, then leave it at style.css
    mode.setAttribute('href', `style.css`);
	modeBtn.innerHTML = "Play Superhero Game";
	reset();
  }
};		

function createRandomBoard() {
	fisherYates(divArray);
	for (let i = 0; i < divArray.length; i++) {
		const card = document.createElement('div');
		card.id = divArray[i][0];
		card.classList.add('facedown');
		card.classList.add(divArray[i][1][1]);
		matchGrid.append(card);
		card.addEventListener('click', function (event) {
			checkIfFirstCard(event);
		});
	}
};
//Invoking below to ensure page always loads with a fresh board
createRandomBoard();		

//Event handler for reset button 
function reset() {
	while (matchGrid.firstChild) {
		matchGrid.removeChild(matchGrid.firstChild);
	}
	matchTracker = 0;
	matchRemainingTracker = totalMatchesInGrid;
	matchAttempsTracker = 0;
	matchIdArr = [];
	matchTrackerHeader.innerText = `Matches Made = ${matchTracker}
	Remaining = ${matchRemainingTracker}
	Attempts = ${matchAttempsTracker}`;
	statusEl.innerText = 'Ready to Play! \n Select A Card';
	createRandomBoard();
};

//Per Tyler office hours, this function determines the control flow of the event listeners so the clicks are not simulatenous
function checkIfFirstCard(evt) {
	if (isFirstCard) {
		selectCard1(evt);
	} else {
		selectCard2(evt);
	}
	isFirstCard = !isFirstCard;
};

//Logs selected element from first click for later evaluation and reveals other side of card
function selectCard1(evt) {
	matchTrackerHeader.innerText = `Matches Made = ${matchTracker} \n Remaining = ${matchRemainingTracker} \n Attempts = ${matchAttempsTracker}`;
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
	firstCardSelectedId.push(evt.target.getAttribute('id'));
	firstCardIdEl = document.getElementById(`${firstCardSelectedId[0]}`);
}

function selectCard2(evt) {
	//logs second move to array to compare in match conditionals
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
	
	if (matchIdArr.includes(evt.target.id)) {
		statusEl.innerText = 'You already made that match!';
		setTimeout(function () {
			statusEl.innerText = 'Select Again';
		}, 1300);
		matchTrackerHeader.innerText = `Matches Made = ${matchTracker} \n  Remaining = ${matchRemainingTracker} \n Attempts = ${matchAttempsTracker}`;
		matchTracker = matchTracker;
		matchAttempsTracker++;
	} else if ( //match made below//
		movesEvaluationArray[0] === movesEvaluationArray[1] &&
		evt.target.id !== firstCardSelectedId[0]
		) {
			matchTracker++;
			matchRemainingTracker--;
			matchAttempsTracker++;
			matchTrackerHeader.innerText = `Matches Made = ${matchTracker} \n  Remaining = ${matchRemainingTracker} \n Attempts = ${matchAttempsTracker}`;
			statusEl.innerText = 'Match Made!';
			setTimeout(function () {
				statusEl.innerText = 'Select Again';
			}, 1300);
			matchIdArr.push(evt.target.id);
			matchIdArr.push(firstCardSelectedId[0]);
			firstCardSelectedId.pop();
			if (matchTracker === totalMatchesInGrid) {
				openModal();
			}
		} else { //if not a match below
			matchAttempsTracker++;
			statusEl.innerText = 'Not a match';
			setTimeout(function () {
				statusEl.innerText = 'Select Again';
			}, 1300);
			matchTrackerHeader.innerText = `Matches Made = ${matchTracker} \n  Remaining = ${matchRemainingTracker} \n Attempts = ${matchAttempsTracker}`;
			//reset the flipped cards to turned over
			setTimeout(function () {
				evt.target.classList.remove(`${evt.target.classList[2]}`);
			}, 900);
			setTimeout(function () {
				firstCardIdEl.classList.remove(`${firstCardIdEl.classList[2]}`);
			}, 880);
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
				
				// divArray.forEach(function (div) {
				// 	let card = document.createElement('div');
				// 	card.id = div[0];
				// 	card.classList.add('facedown');
				// 	card.classList.add(div[1][1]);
				// 	matchGrid.append(card);
				// });
				
				
				//Logs selected element from second click, reveals other side of card, and executes match conditional, evalutes win state
				
				//  REQUIREMENTS  //
				