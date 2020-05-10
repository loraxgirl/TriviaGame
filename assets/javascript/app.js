//IMPORTANT!
$(document).ready(function(){

	// GLOBAL VARIABLES
	// ================
	
		//Define all global variables and objects
		var currentQuestion; 
		var correctAnswer; 
		var incorrectAnswer; 
		var unanswered; 
		var seconds; 
		var time; 
		var answered; 
		var userSelect;
		var messages = {
			correct: "Correct!",
			incorrect: "That's not the right answer.",
			endTime: "Looks like you ran out of time!",
			finished: "Let's see how you did:"
		};
	
		//All questions inside an array of objects
		var triviaQuestions = [
			{	question: "What are the famous dying words of Charles Foster Kane in the movie Citizen Kane?",
				answerList: ["Goodbye", "I Love You", "Rosebud", "Vengeance"],
				answer: 2,
				image: "assets/images/citizenkane.jpg",
				answerText: ""
				},

			{	question: "The theme from The Third Man (also called “The Harry Lime Theme” was performed on what instrument?",
				answerList: ["Piano", "Zither", "Guitar", "Flute"],
				answer: 1,
				image: "assets/images/thethirdman.jpg",
				answerText: ""
				},

			{	question: "About which of his films did Sir Alfred Hitchcock say: Thirty-three percent of the effect of _________ was due to the music.",
				answerList: ["Psycho", "Rope", "North by Northwest", "Charade"],
				answer: 0,
				image: "assets/images/psycho.jpg",
				answerText: ""
				},

			{	question: "Which movie had to reshoot an important scene due to lack of water pressure caused by people watering their lawns when they got home from work?",
				answerList: ["Rain Man", "Purple Rain", "April Rain", "Singin in the Rain"],
				answer: 3,
				image: "assets/images/singinintherain.jpg",
				answerText: ""
				},

			{	question: "Fay Wray thought her director was talking about Cary Grant when he said, 'You'll have the tallest, darkest leading man in Hollywood.' But he really meant:",
				answerList: ["Nosferatu", "Star Wars", "King Kong", "Werewolf in London"],
				answer: 2,
				image: "assets/images/kingkong.jpg",
				answerText: ""
				},

			{	question: "In which movie does Cary Grant smile when Jimmy Stewart hiccups drunkenly?",
				answerList: ["High Society", "Philadelphia Story", "Rebecca", "Rear Window"],
				answer: 1,
				image: "assets/images/philadelphiastory.jpg",
				answerText: ""
				},

			{	question: "In North by Northwest, at one point Cary Grant said he didn't like the way this president was looking at him:",
				answerList: ["Abraham Lincoln", "George Bush", "Teddy Roosevelt", "George Washington"],
				answer: 2,
				image: "assets/images/northbynorthwest.jpg",
				answerText: ""
				},

			{	question: "In which of his movies did Frank Capra make a cameo as a passenger on a bus, singing The Daring Young Man on the Flying Trapeze?",
				answerList: ["For the Love of Mike", "It's A Wonderful Life", "The Apartment", "It Happened One Night"],
				answer: 3,
				image: "assets/images/ithappenedonenight.jpg",
				answerText: ""
				},

			{	question: "In the movie Casablanca, where does Rick hide the letters of transit?",
				answerList: ["Sam's Piano", "A Safe", "Behind the Bar", "Under the Roulette Wheel"],
				answer: 0,
				image: "assets/images/casablanca.jpg",
				answerText: ""
				},

			{	question: "Which Billy Wilder film opens with a body floating face down in a pool, surrounded by curious police?",
				answerList: ["On the Waterfront", "Sunset Boulevard", "The Big Sleep", "Kiss Me Deadly"],
				answer: 1,
				image: "assets/images/sunsetblvd.jpg",
				answerText: ""
				},

			{	question: "In what 1950 drama does Bette Davis say, “Fasten your seatbelts; it’s going to be a bumpy night”?",
				answerList: ["Roman Holiday", "Stagecoach", "All About Eve", "Sunset Boulevard"],
				answer: 2,
				image: "assets/images/allabouteve.jpg",
				answerText: ""
				},

			{	question: "Which Hitchcock film, claimed as his favorite movie, is based on the true story of a serial killer?",
				answerList: ["Shadow of a Doubt", "North by Northwest", "Psycho", "Rebecca"],
				answer: 0,
				image: "assets/images/shadowofadoubt.jpg'",
				answerText: ""
				},

			{	question: "This movie was the first time a screenplay was specifically written for Ginger Rogers and Fred Astaire:",
				answerList: ["Swing Time", "Too Hot To Handle", "The Gay Divorcee", "Top Hat"],
				answer: 3,
				image: "assets/images/tophat.jpg",
				answerText: ""
				},

			{	question: "After all, tomorrow is another day! is the 2nd famous quote from this movie:",
				answerList: ["The Lady Vanishes", "Gone with the Wind", "To Catch A Thief", "The African Queen"],
				answer: 1,
				image: "assets/images/gonewiththewind.jpg",
				answerText: ""
				},

			{	question: "The line 'Pay no attention to that man behind the curtain.' is from which movie?",
				answerList: ["Casablanca", "Singin in the Rain", "Frozen", "The Wizard of Oz"],
				answer: 3,
				image: "assets/images/thewizardofoz.jpg",
				answerText: ""
				},

			{	question: "During the filming of this movie, Peter O'Toole and Omar Sharif would hide under the makeup trailer during sandstorms.",
				answerList: ["The Grapes of Wrath", "On the Waterfront", "Lawrence of Arabia", "Treasure of the Sierra Madre"],
				answer: 2,
				image: "assets/images/lawrenceofarabia.jpg",
				answerText: ""
				},

			{	question: "In Rebel Without a Cause, James Dean and Corey Allen wore this because they filmed the knife fight with real switchblades:",
				answerList: ["Kevlar", "Helmets", "Gloves", "Chainmail"],
				answer: 3,
				image: "assets/images/rebelwithoutacause.jpg",
				answerText: ""
				},

			{	question: "Dame Judith Anderson rarely blinks her eyes while playing Mrs. Danvers in this film, to make the character as creepy and threatening as possible.",
				answerList: ["Rebecca", "Laura", "The Wizard of Oz", "To Catch A Thief"],
				answer: 0,
				image: "assets/images/rebecca.jpg",
				answerText: ""
				},

			{	question: "In A Star is Born, George Cukor pushed her so hard to get an emotional performance out of her, that she threw up before the first take.",
				answerList: ["Janet Leigh", "Judy Garland", "Kim Novak", "Debbie Reynolds"],
				answer: 1,
				image: "assets/images/astarisborn.jpg",
				answerText: "A film star helps a young singer and actress find fame, even as age and alcoholism send his own career on a downward spiral."
				},

			{	question: "In Bringing Up Baby, Cary Grant and Katherine Hepburn lose Baby and chase her around all night. Who is Baby?",
				answerList: ["A dog", "A monkey", "A leopard", "Their niece"],
				answer: 2,
				image: "assets/images/bringingupbaby.jpg",
				answerText: "While trying to secure a $1 million donation for his museum, a befuddled paleontologist is pursued by a flighty and often irritating heiress and her pet leopard, Baby."
				},

			{	question: "This famous line: I have always depended on the kindness of strangers. is from which movie?",
				answerList: ["A Streetcar Named Desire", "Top Hat", "An American in Paris", "The African Queen"],
				answer: 0,
				image: "assets/images/astreetcarnameddesire.jpg",
				answerText: "Disturbed Blanche DuBois moves in with her sister in New Orleans and is tormented by her brutish brother-in-law while her reality crumbles around her."
				},	

			{	question: "Ross Bagdasarian, the creator of Alvin and the Chipmunks, had a cameo in this Hitchcock film:",
				answerList: ["To Catch A Thief", "Charade", "Rear Window", "Vertigo"],
				answer: 2,
				image: "assets/images/rearwindow.jpg",
				answerText: "Ross Bagdasarian plays Jimmy Stewart's neighbor, the songwriter, in Rear Window."
				},

			{	question: "While shooting aerial footage over Greenland, a camera crew for this film accidentally filmed a secret US military base. Their plane was forced down, and the crew was suspected of being Soviet spies.",
				answerList: ["Dr. Strangelove", "The Bourne Identity", "The Man Who Knew Too Much", "Charade"],
				answer: 0,
				image: "assets/images/drstrangelove.jpg",
				answerText: "An insane general triggers a path to nuclear holocaust that a War Room full of politicians and generals frantically tries to stop."
				},

			{	question: "This film was inspired by a Pulitzer Prize winning expose written by reported Malcolm Johnson, and further inspired by the 1948 murder of a NY dock boss:",
				answerList: ["The Day the Earth Stood Still", "On the Waterfront", "Anatomy of a Murder", "Kiss Me Deadly"],
				answer: 1,
				image: "assets/images/onthewaterfront.jpg",
				answerText: "An ex-prize fighter turned longshoreman struggles to stand up to his corrupt union bosses."
				},
		];
	
	
	// FUNCTIONS
	// =========
	
		//hides game area on page load
		$("#gameCol").hide();
		
		//captures user click on start button to create a new game
		$("#startBtn").on("click", function(){
			$(this).hide();
			newGame();
		});
	
		//captures user's click on reset button to create a new game
		$("#startOverBtn").on("click", function(){
			$(this).hide();
			newGame();
		});
	
		//sets up page for a new game, emptying all areas & showing game area
		function newGame(){
			$("#gameCol").show();
			$("#finalMessage").empty();
			$("#correctAnswers").empty();
			$("#incorrectAnswers").empty();
			$("#unanswered").empty();
			$("#gif").hide();
			$("#gifCaption").hide();
			currentQuestion = 0;
			correctAnswer = 0;
			incorrectAnswer = 0;
			unanswered = 0;
			newQuestion();
		}
	
		//displays next question
		function newQuestion(){
			$("#message").empty();
			$("#correctedAnswer").empty();
			$("#gif").hide();
			$("#gifCaption").hide();
			answered = true;
			
			//displays new question
			$("#currentQuestion").html("Question " + (currentQuestion+1) + " of " + triviaQuestions.length);
			$(".question").html(triviaQuestions[currentQuestion].question);
	
			//displays new questions's answer options as multiple choice
			for(var i = 0; i <= 5; i++){
	
				var choices = $("<div>");
				choices.text(triviaQuestions[currentQuestion].answerList[i]);
				choices.attr({"data-index": i });
				choices.addClass("thisChoice");
				$(".answerList").append(choices);
			}
	
			//sets the timer
			countdown();
	
			//When user clicks an answer, pauses the time & displays correct answer to question 
			$(".thisChoice").on("click",function(){
					userSelect = $(this).data("index");
					clearInterval(time);
					answerPage();
				});
			}
	
		//timer countdown
		function countdown(){
			seconds = 15;
			$("#timeLeft").html("00:" + seconds);
			answered = true;
			//Sets a delay of one second before timer starts
			time = setInterval(showCountdown, 1000);
		}
	
		//displays the countdown
		function showCountdown(){
			seconds--;
	
			if(seconds < 10) {
				$("#timeLeft").html("00:0" + seconds);	
			} else {
				$("#timeLeft").html("00:" + seconds);	
			}
			
			if(seconds < 1){
				clearInterval(time);
				answered = false;
				answerPage();
			}
		}
	
		//takes user to the answer page after user selects an answer or timer runs out
		function answerPage(){
			$("#currentQuestion").empty();
			$(".thisChoice").empty(); //Clears question page
			$(".question").empty();
			$("#gif").show();
			$("#gifCaption").show();
	
			var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
			var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	
			//adds the gif that goes with the question
			var gifImageLink = triviaQuestions[currentQuestion].image;
			var newGif = $("<img>");
			newGif.attr("src", gifImageLink);
			newGif.addClass("gifImg");
			$("#gif").html(newGif);
	
			//adds text that describes movie or answer
			var gifCaption = triviaQuestions[currentQuestion].answerText;
				newCaption = $("<div>");
				newCaption.html(gifCaption);
				newCaption.addClass("gifCaption");
				$("#gifCaption").html(newCaption);
			
			//checks to see if user choice is correct, incorrect, or unanswered
			if((userSelect == rightAnswerIndex) && (answered === true)){
				correctAnswer++;
				$('#message').html(messages.correct);
			} else if((userSelect != rightAnswerIndex) && (answered === true)){
				incorrectAnswer++;
				$('#message').html(messages.incorrect);
				$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
			} else{
				unanswered++;
				$('#message').html(messages.endTime);
				$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
				answered = true;
			}
			
			if(currentQuestion == (triviaQuestions.length-1)){
				setTimeout(scoreboard, 6000);
			} else{
				currentQuestion++;
				setTimeout(newQuestion, 6000);
			}	
		}
	
		//displays all the game stats at end of game
		function scoreboard(){
			$('#timeLeft').empty();
			$('#message').empty();
			$('#correctedAnswer').empty();
			$('#gif').hide();
			$("#gifCaption").hide();
	
			$('#finalMessage').html(messages.finished);
			$('#correctAnswers').html("Correct Answers: " + correctAnswer);
			$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
			$('#unanswered').html("Unanswered: " + unanswered);
			$('#startOverBtn').addClass('reset');
			$('#startOverBtn').show();
			$('#startOverBtn').html("PLAY AGAIN");
		}
	
	});