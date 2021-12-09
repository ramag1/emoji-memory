
// const divObject = {
//     matchOne = [[0, 1], ["facedown", "matchOne"]],
    matchTwo = [2, ["facedown", "matchTwo"]],
    matchThree = [4, ["facedown", "matchThree"]],
    matchFour = [6, ["facedown", "matchFour"]],
    matchFive = [8,["facedown", "matchFive"]],
    matchSix = [10,["facedown", "matchSix"]],
    matchSeven = [12, ["facedown" , "matchSeven"]],
    matchEight= [14, ["facedown", "matchEight"]],
    matchTwo = [3, ["facedown", "matchTwo"]],
    matchThree = [5, ["facedown", "matchThree"]],
    matchFour = [7, ["facedown", "matchFour"]],
    matchFive = [9, ["facedown", "matchFive"]],
    matchSix = [11, ["facedown", "matchSix"]],
    matchSeven = [13, ["facedown" , "matchSeven"]],
    matchEight= [15, ["facedown", "matchEight"]]

const divArray = [
    [0, ["facedown", "matchOne"]],
    [1, ["facedown", "matchOne"]],
]
const matchGrid = document.querySelector("#grid");


divArray.forEach(function (div) {
    const card = document.createElement("div")
    card.id= div[0]
    card.classList.add("facedown")
    card.classList.add(div[1][1])
    console.log(card)
    matchGrid.append(card)
})

console.log(matchGrid)