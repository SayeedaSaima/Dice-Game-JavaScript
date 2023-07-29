const dice = document.getElementById('dice-btn');

function diceGame() {
	var randomDice = Math.floor((Math.random() * 6) + 1);
	var diceLocation = "images/" + "Dice-" + randomDice + ".png";
	var img1 = document.querySelectorAll("img")[0];
	img1.setAttribute("src", diceLocation);

	var randomDice2 = Math.floor((Math.random() * 6) + 1);
	var diceLocation2 = "images/" + "Dice-" + randomDice2 + ".png";
	var img2 = document.querySelectorAll("img")[0];
	img2.setAttribute("src", diceLocation2);

	if (randomDice > randomDice2) {
		document.querySelector("h1").innerHTML = "&#128681; Player 1 Win!!";
	}
	else if (randomDice < randomDice2) {
		document.querySelector("h1").innerHTML = "Player 2 Win!! &#128681;";
	}
	else if (randomDice = randomDice2) {
		document.querySelector("h1").innerHTML = "&#128681; Draw!! &#128681;";
	}
	else {
		document.querySelector("h1").innerHTML = "Something Error!!"
	}
	dice.innerHTML = "Play Again"
}