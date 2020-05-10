$(document).ready(function() {
    // console.log( "ready!" );

    // track which question we are on
    var questionCounter = 0;
    // initial time of 15 seconds for each question
    var time = 15;
    // will keep tally of right guesses for end game
    var correctGuesses = 0;
    //will keep tally of wrong guesses for end game
    var incorrectGuesses = 0;

    // question & answer array
    var questions = [
    
		{	question: "What are the famous dying words of Charles Foster Kane in the movie Citizen Kane?",
			choices: ["Goodbye", "I Love You", "Rosebud", "Vengeance"],
			correctAnswer: "Rosebud",
			image: "<img src='assets/images/citizenkane.jpg'>"	}, 
			
		{	question: "The theme from The Third Man (also called “The Harry Lime Theme” was performed on what instrument?",
			choices: ["Piano", "Zither", "Guitar", "Flute"],
			correctAnswer: "Zither",
			image: "<img src='assets/images/thethirdman.jpg'>"	}, 

		{	question: "About which of his films did Sir Alfred Hitchcock say: Thirty-three percent of the effect of _________ was due to the music.",
			choices: ["Psycho", "Rope", "North by Northwest", "Charade"],
			correctAnswer: "Psycho",
			image: "<img src='assets/images/psycho.jpg'>"		},

		{	question: "Which movie had to reshoot an important scene due to lack of water pressure caused by people watering their lawns when they got home from work?",
			choices: ["Rain Man", "Purple Rain", "April Rain", "Singin in the Rain"],
			correctAnswer: "Singin in the Rain",
			image: "<img src='assets/images/singinintherain.jpg'>"},
				
		{	question: "Fay Wray thought her director was talking about Cary Grant when he said, 'You'll have the tallest, darkest leading man in Hollywood.' But he really meant:?",
			choices: ["Nosferatu", "Star Wars", "King Kong", "Werewolf in London"],
			correctAnswer: "King Kong",
			image: "<img src='assets/images/kingkong.jpg'>"		},
				
		{	question: "The crop duster scene in this movie inspired the helicopter chase in the Bond movie, From Russia With Love.",
			choices: ["North by Northwest", "Rear Window", "Some Like It Hot", "Anatomy of a Murder"],
			correctAnswer: "North by Northwest",
			image: "<img src='assets/images/northbynorthwest.jpg'>"	},

		{	question: "In the movie Casablanca, where does Rick hide the letters of transit?",
			choices: ["Sam's Piano", "A Safe", "Behind the Bar", "Under the Roulette Wheel"],
			correctAnswer: "Sam's Piano",
			image: "<img src='assets/images/casablanca.jpg'>"	}, 
		
		{	question: "In which movie does Cary Grant smile when Jimmy Stewart hiccups drunkenly?",
			choices: ["High Society", "Philadelphia Story", "Rebecca", "Rear Window"],
			correctAnswer: "Philadelphia Story",
			image: "<img src='assets/images/philadelphiastory.jpg'>"},
				
		{	question: "In which of his movies did Frank Capra make a cameo as a passenger on a bus, singing The Daring Young Man on the Flying Trapeze?",
			choices: ["For the Love of Mike", "It's A Wonderful Life", "The Apartment", "It Happened One Night"],
			correctAnswer: "It Happened One Night",
			image: "<img src='assets/images/ithappenedonenight.jpg'>"},

		{	question: "In what 1950 drama does Bette Davis say, “Fasten your seatbelts; it’s going to be a bumpy night”?",
			choices: ["Roman Holiday", "Stagecoach", "All About Eve", "Sunset Boulevard"],
			correctAnswer: "All About Eve",
			image: "<img src='assets/images/allabouteve.jpg'>"	},

		{	question: "Which Hitchcock film, claimed as his favorite movie, is based on the true story of a serial killer?",
			choices: ["Shadow of a Doubt", "North by Northwest", "Psycho", "Rebecca"],
			correctAnswer: "Shadow of a Doubt",
			image: "<img src='assets/images/shadowofadoubt.jpg'>"},
				
		{	question: "This movie was the first time a screenplay was specifically written for Ginger Rogers and Fred Astaire:",
			choices: ["Swing Time", "Too Hot To Handle", "The Gay Divorcee", "Top Hat"],
			correctAnswer: "Top Hat",
			image: "<img src='assets/images/tophat.jpg'>"		},
			
		{	question: "The line 'Pay no attention to that man behind the curtain.' is from which movie?",
			choices: ["Casablanca", "Singin in the Rain", "Frozen", "The Wizard of Oz"],
			correctAnswer: "The Wizard of Oz",
			image: "<img src='assets/images/thewizardofoz.jpg'>"}
		 ];
	  

	// create question contents according to question count
	function questionContent() {
		// a for loop would be cool here...
    	$("#gameScreen").append("<p><strong>" + questions[questionCounter].question + 
    		"</p><p class='choices'>" + questions[questionCounter].choices[0] + 
    		"</p><p class='choices'>" + questions[questionCounter].choices[1] + 
    		"</p><p class='choices'>" + questions[questionCounter].choices[2] + 
    		"</p><p class='choices'>" + questions[questionCounter].choices[3] + 
    		"</strong></p>");
	}

	// user guessed correctly
	function userWin() {
		$("#gameScreen").html("<p>You got it right!</p>");
		correctGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + "</span></p>" + questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user guessed incorrectly
	function userLoss() {
		$("#gameScreen").html("<p>Nope, that's not it!</p>");
		incorrectGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + "</span></p>" + questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user ran out of time
	function userTimeout() {
		if (time === 0) {
			$("#gameScreen").html("<p>You ran out of time!</p>");
			incorrectGuesses++;
			var correctAnswer = questions[questionCounter].correctAnswer;
			$("#gameScreen").append("<p>The answer was <span class='answer'>" + 
				correctAnswer + "</span></p>" + questions[questionCounter].image);
			setTimeout(nextQuestion, 4000);
			questionCounter++;
		}
	}

	// screen that shows final score and nice message :)
	function resultsScreen() {
		if (correctGuesses === questions.length) {
			var endMessage = "Perfection! Might want to go outside more tho";
			var bottomText = "#nerdalert!";
		}
		else if (correctGuesses > incorrectGuesses) {
			var endMessage = "Good work! But do better you can...";
			var bottomText = "all your base are belong to us";
		}
		else {
			var endMessage = "You seem to have taken an arrow to the knee";
			var bottomText = "#scrub";
		}
		$("#gameScreen").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#gameScreen").append("<h1 id='start'>Start Over?</h1>");
		$("#bottomText").html(bottomText);
		gameReset();
		$("#start").click(nextQuestion);
	}

	// game clock currently set to 15 seconds
	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				userTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	// moves question counter forward to show next question
	function nextQuestion() {
		if (questionCounter < questions.length) {
			time = 15;
			$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}
	// console.log(questionCounter);
	// console.log(questions[questionCounter].correctAnswer);
	}

	// reset score and counter parameters on restart
	function gameReset() {
		questionCounter = 0;
		correctGuesses = 0;
		incorrectGuesses = 0;
	}

    function startGame() {
    	$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
    	$("#start").hide();
    	// $("#gameScreen").append("<div id='question'>");
    	// var nextQuestion = questionContent(questionCounter);
    	// $("#gameScreen").append(nextQuestion);

		// $("#gameScreen").append("<p>" + questions[questionCounter].question + "</p><p>" + questions[questionCounter].choices[0] + "</p><p>" + questions[questionCounter].choices[1] + "</p><p>" + questions[questionCounter].choices[2] + "</p><p>" + questions[questionCounter].choices[3] + "</p>");
		// questionCounter++;
		questionContent();
    	timer();
    	userTimeout();
    }

    // this starts the game
    $("#start").click(nextQuestion);

    // click function to trigger right or wrong screen
	$("#gameScreen").on("click", ".choices", (function() {
		// alert("clicked!");
		var userGuess = $(this).text();
		if (userGuess === questions[questionCounter].correctAnswer) {
			clearInterval(clock);
			userWin();
		}
		else {
			clearInterval(clock);
			userLoss();
		}
	}));
});