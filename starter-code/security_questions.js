console.log("security_questions.js loaded");

let securityQuestions = [
{
  question: "what is your favorite movie?",
  expectedAnswer: "Star Wars"
},
{
  question: "what was your first car?",
  expectedAnswer: "Honda Accord"
},
{
  question: "what is your first name?",
  expectedAnswer: "Bryan"
}
]


console.log(securityQuestions);
let userAnswer = "";

for(i = 0; i <= securityQuestions.length - 1; i++){

    userAnswer = prompt(securityQuestions[i].question);
    if(userAnswer !== securityQuestions[i].expectedAnswer) {
      console.log(userAnswer + " was User Answer #" + (i+1));
      console.log(securityQuestions[i].expectedAnswer + " was expected for User Answer #" + (i+1));
      alert("Sorry you're answer does not match");
      break;
    }
    else {
      console.log(userAnswer + " is User Answer #" + (i+1));
    }
}

// "what is your favorite movie?":"Star Wars", "what was your first car":"Honda Accord", "what is your first name":"Bryan"
