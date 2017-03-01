var printToScreen;
var printChoices;
var printAnswer;
var SelectedAnswer;
var printImages;
var correctGuesses = 0;
var wrongGuesses = 0;
var gametimer = 0;
var j = 0;
var questions = 

[
	{	
		images:"assets/images/figrin.jpg",
		question: "What is the name of the band that plays the horns in the Cantina on Tatooine", 
		choices:["Chewy and the Chewbaccas","The Starlight Band", "Sonny Eclipse", "Figrin D'an and The Modal Nodes"], 
		answer: 3
	},
	{	
		images:"assets/images/figrin.jpg",
		question: "What is the name of the band that plays the horns in the Cantina on Tatooine", 
		choices:["Chewy and the Chewbaccas","The Starlight Band", "Sonny Eclipse", "Figrin D'an and The Modal Nodes"], 
		answer: 3
	},
	{
		images:"assets/images/rancor.jpg",
		question: "Where does the rancor monster, seen in Return of the Jedi, live?", 
		choices:["Beneath Jabba the Hutts Palace","Inside of an asteroid","A Cave on Hoth","The Dagobah System"], 
		answer: 3
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

function question(){
		gametimer = setInterval(nextQuestion, 30000);
	}

function answerCheck(){
		if (SelectedAnswer === printAnswer) {
			console.log(printAnswer)
			correctGuesses++;
			alert("You got it!")
			nextQuestion();
			}
		else{
			wrongGuesses++;
		}
	}

function nextQuestion(){
	i--;
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
}


$(document).ready(function(){
	startGame()
	function startGame(){
// printing arrays
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

	$("#choice1").on("click",function(e){
		SelectedAnswer = 0
		answerCheck();
		
			
	});

	$("#choice2").on("click",function(e){
		SelectedAnswer = 1
		answerCheck();
	});

	$("#choice3").on("click",function(e){
		SelectedAnswer = 2
		answerCheck();

	});

	$("#choice4").on("click",function(e){
		SelectedAnswer = 3
		answerCheck();
	});

});