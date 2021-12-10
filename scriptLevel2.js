// // GAME BOARD ONLOAD BELOW //
// function levelTwo () {
// const divArrayTwo = [
// 	[16, ['facedown', 'matchNine']],
// 	[17, ['facedown', 'matchNine']],
// 	[18, ['facedown', 'matchTen']],
// 	[19, ['facedown', 'matchTen']],
// 	[20, ['facedown', 'matchEleven']],
// 	[21, ['facedown', 'matchEleven']],
// 	[22, ['facedown', 'matchTwelve']],
// 	[23, ['facedown', 'matchTwelve']],
// 	[24, ['facedown', 'matchThirteen']],
// 	[25, ['facedown', 'matchThirteen']],
// 	[26, ['facedown', 'matchFourteen']],
// 	[27, ['facedown', 'matchFourteen']],
// 	[28, ['facedown', 'matchFifteen']],
// 	[29, ['facedown', 'matchFifteen']],
// 	[30, ['facedown', 'matchSixteen']],
// 	[21, ['facedown', 'matchSixteen']],
// ];


// //Fisher Yates Randomizing Div function below- sourced from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// function fisherYates(array) {
// 	var count = array.length,
// 		randomnumber,
// 		temp;
// 	while (count) {
// 		randomnumber = (Math.random() * count--) | 0;
// 		temp = array[count];
// 		array[count] = array[randomnumber];
// 		array[randomnumber] = temp;
// 	}
// 	return array;
// }
// fisherYates(divArrayTwo);

// divArrayTwo.forEach(function (div) {
// 	const card = document.createElement('div');
// 	card.id = div[0];
// 	card.classList.add('facedown');
// 	card.classList.add(div[1][1]);
// 	matchGrid.append(card);
// });
// }


// // //Resets the board to turned over cards after Reset button has been clicked
// // function reset() {
// // 	for (let i = 0; i < totalMatchesInGrid * 2; i++) {
// // 		div[i].classList.remove(`${div[i].classList[2]}`);
// // 	}
// // 	matchTracker = 0;
// // 	matchRemainingTracker = totalMatchesInGrid;
// // 	matchAttempsTracker = 0;
// // 	matchIdArr = [];
// // 	matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker}\n
// // 	Matches Remaining = ${matchRemainingTracker} \n Attempts = ${matchAttempsTracker}`;
// // 	statusEl.innerText = 'Ready to Play! \n Select A Card';
// // }

// // //Per Tyler office hours, this function determines the control flow of the event listeners so the clicks are not simulatenous
// // function checkIfFirstCard(evt) {
// // 	if (isFirstCard) {
// // 		selectCard1(evt);
// // 	} else {
// // 		selectCard2(evt);
// // 	}
// // 	isFirstCard = !isFirstCard;
// // }

// //Log selected card when clicked, prevents misclicks oustide div from registering
// function startGame() {
// 	for (let i = 0; i < totalMatchesInGrid * 2; i++) {
// 		divArraySelect.push(div[i]);
// 		div[i].addEventListener('click', function (event) {
// 			checkIfFirstCard(event);
// 		});
// 	}
// }
// startGame();

// //Logs selected element from first click for later evaluation and reveals other side of card
// function selectCard1(evt) {
// 	matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker} \n Matches Remaining = ${matchRemainingTracker} \n Attempts = ${matchAttempsTracker}`;
// 	if (evt.target.classList[1] === 'matchNine') {
// 		evt.target.classList.add('matchNineFlip');
// 	} else if (evt.target.classList[1] === 'matchTen') {
// 		evt.target.classList.add('matchTenFlip');
// 	} else if (evt.target.classList[1] === 'matchEleven') {
// 		evt.target.classList.add('matchElevenFlip');
// 	} else if (evt.target.classList[1] === 'matchTwelve') {
// 		evt.target.classList.add('matchTwelveFlip');
// 	} else if (evt.target.classList[1] === 'matchThirteen') {
// 		evt.target.classList.add('matchThirteenFlip');
// 	} else if (evt.target.classList[1] === 'matchFourteen') {
// 		evt.target.classList.add('matchFourteenFlip');
// 	} else if (evt.target.classList[1] === 'matchFifteen') {
// 		evt.target.classList.add('matchFifteenFlip');
// 	} else if (evt.target.classList[1] === 'matchSixteen') {
// 		evt.target.classList.add('matchSixteenFlip');
// 	}
// 	movesEvaluationArray[0] = evt.target.classList[1];
// 	firstCardSelectedId.push(evt.target.getAttribute('id'));
// 	firstCardIdEl = document.getElementById(`${firstCardSelectedId[0]}`);
// }
// //Logs selected element from second click, reveals other side of card, and executes match conditional, evalutes win state
// function selectCard2(evt) {
// 	movesEvaluationArray[1] = evt.target.classList[1];
// 	if (evt.target.classList[1] === 'matchNine') {
// 		evt.target.classList.add('matchNineFlip');
// 	} else if (evt.target.classList[1] === 'matchTen') {
// 		evt.target.classList.add('matchTenFlip');
// 	} else if (evt.target.classList[1] === 'matchEleven') {
// 		evt.target.classList.add('matchElevenFlip');
// 	} else if (evt.target.classList[1] === 'matchTwelve') {
// 		evt.target.classList.add('matchTwelveFlip');
// 	} else if (evt.target.classList[1] === 'matchThirteen') {
// 		evt.target.classList.add('matchThirteenFlip');
// 	} else if (evt.target.classList[1] === 'matchFourteen') {
// 		evt.target.classList.add('matchFourteenFlip');
// 	} else if (evt.target.classList[1] === 'matchFifteen') {
// 		evt.target.classList.add('matchFifteenFlip');
// 	} else if (evt.target.classList[1] === 'matchSixteen') {
// 		evt.target.classList.add('matchSixteenFlip');
// 	}

// 	if (matchIdArr.includes(evt.target.id)) {
// 		statusEl.innerText = 'You already made that match!';
// 		setTimeout(function () {
// 			statusEl.innerText = 'Select Again';
// 		}, 1300);
// 		matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker} \n Matches Remaining = ${matchRemainingTracker} \n Attempts = ${matchAttempsTracker}`;
// 		matchTracker = matchTracker;
// 		matchAttempsTracker++;
// 	} else if (
// 		movesEvaluationArray[0] === movesEvaluationArray[1] &&
// 		evt.target.id !== firstCardSelectedId[0]
// 	) {
// 		console.log('match!');
// 		matchTracker++;
// 		matchRemainingTracker--;
// 		matchAttempsTracker++;
// 		matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker} \n Matches Remaining = ${matchRemainingTracker} \n Attempts = ${matchAttempsTracker}`;
// 		statusEl.innerText = 'Match Made!';
// 		setTimeout(function () {
// 			statusEl.innerText = 'Select Again';
// 		}, 1300);
// 		matchIdArr.push(evt.target.id);
// 		matchIdArr.push(firstCardSelectedId[0]);
// 		console.log(matchIdArr);
// 		firstCardSelectedId.pop();
// 		if (matchTracker === totalMatchesInGrid) {
// 			openModal();
// 		}
// 	} else {
// 		matchAttempsTracker++;
// 		statusEl.innerText = 'Not a match';
// 		setTimeout(function () {
// 			statusEl.innerText = 'Select Again';
// 		}, 1300);
// 		matchTrackerHeader.innerText = `Matches You've Made = ${matchTracker} \n  Matches Remaining = ${matchRemainingTracker} \n Attempts = ${matchAttempsTracker}`;
// 		//reset the flipped cards to turned over
// 		setTimeout(function () {
// 			evt.target.classList.remove(`${evt.target.classList[2]}`);
// 		}, 900);
// 		setTimeout(function () {
// 			firstCardIdEl.classList.remove(`${firstCardIdEl.classList[2]}`);
// 		}, 880);
// 		firstCardSelectedId.pop();
// 	}
// }
