function populate(){
	if(quiz.isEnded()){
		// showScores();
	}
	else{
		// show question
		var element = document.getElementbyId("question-text");
		element.innerHTML = quiz.getQuestionIndex().text;

		// show choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i = 0; i < choices.length; i++){
			var element = document.getElementbyId("choice" + i);
			element.innerHTML = choices[i];
		}
	}
};
function guess(id, guess) {
	var button = document.getElementbyId(i);
	button.onclick = function () {
		quiz.guess(guess);
		populate();
	}
}
function showScores(){
	var gameOverHtml = "<h1>Result</h1>";
		gameOverHtml += "<h2 id='score'> Your scores: " + quiz.scores + "</h2>";
	var element document.getElementbyId("quiz");
	element.innerHTML = gameOverHtml;
	guess ("btn" + i, choices[i]);

}
var questions = [
	new Question("What is the name of the band that plays the horns in the Cantina on Tatooine", ["Chewy and the Chewbaccas","","The Starlight Band", "Sonny Eclipse", "Figrin D'an and The Modal Nodes"], "Figrin D'an and The Modal Nodes"),
	new Question("Where does the rancor monster, seen in Return of the Jedi, live?" ["Beneath Jabba the Hutts Palace","Inside of an asteroid","A Cave on Hoth","The Dagobah System"], "Beneath Jabba the Hutts Palace"),
	new Question("What planet do jawas live on?", ["Endor","Hoth","Tatooine","Earth"], "Tatooine"),
	new Question("How old is Yoda when he dies?", ["900 Years Old","Just reborn","60 Years Old","300 Years Old"], "900 Years Old"),
	new Question("Who killed Jabba the Hutt?", ["Han Solo","Princess Leia","R2-D2","Luke Skywalker"], "Princess Leia"),
];

var quiz = new Quiz(questions);

populate();