		const prompt = require("prompt-sync")();
		
		let temp = 0;
		let score = 0;

	for(let count = 1; count <= 10; count++)  { 
	let randomNumber1 = Math.floor(Math.random() * 20) + 1;
	let randomNumber2 = Math.floor(Math.random() * 20) + 1;
		if (randomNumber1 < randomNumber2)
			randomNumber2 = randomNumber1;
			temp = randomNumber2;
	
		let correctAnswer = randomNumber1 - randomNumber2;
		for(let num = 1; num <= 2; num++) {
	console.log("Substract " + randomNumber1 + " - " + randomNumber2);
		let answer = Number(prompt ("Enter your answer: "));
		if(answer == correctAnswer)  {
			score++;
			break;
			}

		else if (num == 1){
			console.log("Last attempt for this question: ");
				
		}
				 
    }
}
   // console.log("You took " + timeTaken + " seconds to answer this question.");	
console.log("Your score is " + score);
