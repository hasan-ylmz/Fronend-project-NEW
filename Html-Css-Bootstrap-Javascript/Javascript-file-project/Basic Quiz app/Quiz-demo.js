// Quiz demo app
function question(text,choices,answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Question prototype
question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

// Quiz constructor 
function Quiz(question){
    this.question= question;
    this.score =0;
    this.questionIndex = 0;
}

// Quiz prototype
Quiz.prototype.getquestion = function(){
    return this.question[this.questionIndex]
}

// Quiz isfinish 
Quiz.prototype.isFinish = function(){
    return this.question.length ===this.questionIndex;
} 

// Quiz guess
Quiz.prototype.guess = function(answer){
    var question=this.getquestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}

const q1 = new question("Whats the best programming language in web development", ["ruby","python","javascript","sql"],"javascript");
const q2 =   new question("What's the most popular programming", ["php","python","javascript","c#"],"javascript");
const q3 = new question("What's the best modern porgramming language", ["php","python","javascript","c#","javascript"],"javascript");

var questions = [q1,q2,q3];

// Start Quiz 
var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else {
        var question = quiz.getquestion();
        var choices = question.choices
        document.querySelector("#question").textContent = question.text
    
        // "choice"+i choice0 ,choice1,choice2,choice3 olarak bize döndürecek.
        for (var i=0; i<choices.length; i++){
            var element = document.querySelector("#choice"+i);
            element.innerHTML= choices[i];
        
            guess("btn"+i,choices[i]);
        }
        showProgress();
    
    }
}

function guess(id,guess){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion();
    }
}


function showScore(){
    var html =  `<h2>Score</h2><h4>${quiz.score}</h4> `;
    
    document.querySelector(".card-body").innerHTML =html ;
}

function showProgress(){
  var totalQuestion = quiz.questions.length;
  var questionNUmber =  quiz.questionIndex+1;
  document.querySelector("#progress").innerHTML = "Question" + questionNUmber + "of " + totalQuestion;
}

// Quiz question
/* console.log(quiz.isFinish());

// question-1
console.log(quiz.getquestion());
quiz.guess("javascript");

// question-2
console.log(quiz.getquestion());
quiz.guess("javascript");

// question-3
console.log(quiz.getquestion());
quiz.guess("javascript");

console.log(quiz.score)
console.log(quiz.isFinish()); */

