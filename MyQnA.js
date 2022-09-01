var readlineSync = require("readline-sync");
console.log('Welcome to my Quiz - Do you Know Me?')
var userName = readlineSync.question('please enter your Name\n')

console.log('Welcome ' + userName);
var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('Correct Answer');
    score = score + 5;
  }
  else {
    console.log('Wrong Answer');
  }
  console.log('Your score is ', score);
  console.log('--------------')
}

// var objOfPlay1 = {
//   question:"What is my age?\n",
//   answer:"25"
// }

// var objOfPlay2 = {
//    question:"My fav color is?\n",
//    answer:"blue"
// }

//array of above Objects is directly written
var arrayOfPlay = [
  { question: "What is my age?\n", answer: "25" },
  { question: "My fav color is?\n", answer: "blue" },
  { question: "My fav game is?\n", answer: "chess" },
  { question: "What is my fav food?\n", answer: "shawarma" },
  { question: "How many lang does Girish know?\n", answer: "4" }];

for (var i = 0; i < arrayOfPlay.length; i++) {
  var temp = arrayOfPlay[i];
  //call play how we used to call earlier as shown on 43 44 line
  play(temp.question, temp.answer);
}



// play("What is my age?\n", "25");
// play("My fav color is?\n" ,"blue");
console.log(userName, 'Your final Score is ' + score, '\n======================================\n \n Check out the previous high scores');

var highScores = [{ name: 'Girish', score: 25 }, { name: 'Harish', score: 15 }];
var standings = 1;
for (var i = 0; i < highScores.length; i++) {
  var temp = highScores[i];

  console.log(standings, '.', temp.name, ' ==> ', temp.score);
  standings++;
}

