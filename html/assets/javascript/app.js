var printToScreen;
var printChoices;
var printAnswer;
var SelectedAnswer;
var printImages;
var correctGuesses = 0;
var wrongGuesses = 0;
var gametimer = 0;
var j = 0;
var audio = new Audio("assets/starwars.mp3");
var countDown;
var time = 0;
var converted;

var questions = 

[
	
	{	
		images:"assets/images/figrin.jpg",
		question: "What is the Cantina band's name on Tatooine", 
		choices:["Chewy and the Chewbaccas","The Starlight Band", "Sonny Eclipse", "Figrin D'an and The Modal Nodes"], 
		answer: 3
	},
	{
		images:"assets/images/rancor.jpg",
		question: "Where does the rancor monster, seen in Return of the Jedi, live?", 
		choices:["Beneath Jabba the Hutts Palace","Inside of an asteroid","A Cave on Hoth","The Dagobah System"], 
		answer: 0
	},
	
	{
		images:"assets/images/jawa.jpg",
		question: "What planet do jawas live on?",
		choices:["Endor","Hoth","Tatooine","Earth"], 
		answer: 2
	},
	{
		images:"assets/images/yoda.png",
		question: "How old is Yoda when he dies?",
		choices:["900 Years Old","Just reborn","60 Years Old","300 Years Old"], 
		answer: 0
	},
	{
		images:"assets/images/jabba.jpg",
		question: "Who killed Jabba the Hutt?",
		choices:["Han Solo","Princess Leia","R2-D2","Luke Skywalker"], 
		answer: 1
	}
];

for (var i = 0; i < questions.length; i++){
	printImages = questions[i].images
}

for (var i = 0; i < questions.length; i++){
	printQuestions = questions[i].question
}
for (var i = 0; i < questions.length; i++){
	printChoices = questions[i].choices
}
for (var i = 0; i < questions.length; i++){
	printAnswer = questions[i].answer
}
// functions

countDown = {
  time: 30,
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  },

  start: function() {

    // DONE: Use setInterval to start the count here.
    intervalId = setInterval(countDown.count, 1000);
  },

  reset: function() {
    countDown.time = 30;
   $("#timer-text").html("00:30");
  },

  stop: function() {
  	if (time === 0) {
  		clearInterval(intervalId);
  	};
    // DONE: Use clearInterval to stop the count here.
    
  },

  count: function() {

    countDown.time--;

    var converted = countDown.timeConverter(countDown.time);

    $("#timer-text").html(converted);

  },	
}


function youWon(){
	$("#image-holder").html("You Won!");
	$("#choice1").html("Play again?");
	$( "#choice2" ).hide();
	$( "#choice3" ).hide();
	$( "#choice4" ).hide();
}

function youLost(){
	$("#image-holder").html("You Lost!");
	$("#choice1").html("Play again?");
	$( "#choice2" ).hide();
	$( "#choice3" ).hide();
	$( "#choice4" ).hide();
}

function answerCheck(){
		if (SelectedAnswer === printAnswer) {
			correctGuesses = correctGuesses++;
			alert("You got it!")
			nextQuestion();
			}
		else{
			wrongGuesses++;
		}
	}

function answerCheck(){
		if (SelectedAnswer === printAnswer) {
			console.log(SelectedAnswer);
			console.log(printAnswer);
			correctGuesses = correctGuesses + 1;
			
			alert("You got it!")
			nextQuestion();
			}
		else{
			
		
		if (SelectedAnswer === printAnswer){
			wrongGuesses = wrongGuesses + 1;
		}
	}
}

function nextQuestion(){
	i--;
	countDown.reset();
	var j = i - 1;
	$("#question-text").html(questions[j].question);
	printChoices = questions[j].choices
	printImages = questions[j].images
	printAnswer = questions[j].answer
	$("#choice1").html(printChoices[0]);
	$("#choice2").html(printChoices[1]);
	$("#choice3").html(printChoices[2]);
	$("#choice4").html(printChoices[3]);
	$("#image-holder").html("<img src=" + printImages + " width='50%'>");
	if (correctGuesses === 5) {
		youWon();
	};
	if (wrongGuesses === 5) {
		youLost();
	};
}


$(document).ready(function(){
	startGame()
	countDown.start()

	function startGame(){
	
// printing arrays
	audio.play();
	$("#timer-text").html("00:30");
	$("#question-text").html(printQuestions);
	$("#choice1").html(printChoices[0]);
	$("#choice2").html(printChoices[1]);
	$("#choice3").html(printChoices[2]);
	$("#choice4").html(printChoices[3]);
	$("#timer").html();
	$("#image-holder").html("<img src=" + printImages + " width='50%'>");
	correctGuesses = 0;
	wrongGuesses = 0;
}

// click events

	$("#btn1").on("click",function(e){
		SelectedAnswer = 0
		answerCheck();
		
			
	});

	$("#btn2").on("click",function(e){
		SelectedAnswer = 1
		answerCheck();
	});

	$("#btn3").on("click",function(e){
		SelectedAnswer = 2
		answerCheck();

	});

	$("#btn4").on("click",function(e){
		SelectedAnswer = 3
		answerCheck();
	});

});