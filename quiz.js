const quizRoot = document.getElementById('quiz')
const questionDiv = document.getElementById('question')
const answer1div = document.getElementById('answer1')
const answer2div = document.getElementById('answer2')
const answer3div = document.getElementById('answer3')
const answer4div = document.getElementById('answer4')


answer1div.style.color = "red"
answer2div.style.color = "yellow"
answer2div.style.webkitTextStroke = "2px black"
answer3div.style.webkitTextStroke = "2px black"
answer3div.style.color = "white"
answer4div.style.color = "blue"

const questions = [
"Whats your favorite color?", 
"What would you eat?", 
"Which animal attracts you?"
]
const answers = [
["red",
"yellow",
"white",
"blue"],
["Hot cheetos", 
"salad",
"marshmallow",
"sushi"],
["red panda",
"worm",
"bird",
"nemo"]
]

let currentQuestion = 0
let fireScore = 0
let airScore = 0
let earthScore = 0
let waterScore = 0

function advance() {
	if (currentQuestion===3){
		answer1div.textContent = ""
		answer2div.textContent = ""
		answer3div.textContent = ""
		answer4div.textContent = ""

		questionDiv.textContent = "to be continued..maybe"

		score = "YOUR ELEMENTS... fire: " + fireScore + 
			" earth: " + earthScore + 
			" air: " + airScore + 
			" water: " + waterScore;

		alert(score);
	} else {
		currentQuestion += 1
		questionDiv.textContent = questions[currentQuestion-1]
		answer1div.textContent = answers[currentQuestion-1][0]
		answer2div.textContent = answers[currentQuestion-1][1]
		answer3div.textContent = answers[currentQuestion-1][2]
		answer4div.textContent = answers[currentQuestion-1][3]
    }
}
answer1.onclick = function() {
	fireScore += 1
	advance()
}
answer2.onclick = function() {
	earthScore += 1
	advance()
}
answer3.onclick = function() {
	airScore += 1
	advance()
}
answer4.onclick = function() {
	waterScore += 1
	advance()
}

advance()


