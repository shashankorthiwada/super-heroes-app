var colourWithChalk = require("chalk");

var readLine = require("readline-sync");

var userName = readLine.question("What is Your Name ?");

console.log("Hey " + userName + " Welcome to Marvel/DC Quiz ");

var userChoice = readLine.question("You are Marvel Fan or DC Fan ? ");

var marvelQuestions = [
  {
    question: "Who are the Earth's Mightiest heroes Which Marvel Formed?",
    answer: "Avengers",
  },
  {
    question: "Who is Most Intelligent Among Avengers?",
    answer: "IronMan",
  },
  {
    question: "Who is the Strongest Avenger?",
    answer: "Hulk",
  },
  {
    question: "Who is the Ultimate Villain of Entire Marvel universe?",
    answer: "Thanos",
  },
  {
    question:
      "Who's dialogue is this 'Sometimes I wanna punch you on your Perfect teeth'?",
    answer: "TonyStark",
  },
];

var dcQuestions = [
  {
    question: "Who has the most power in DC Comics ?",
    answer: "superman",
  },
  {
    question: "Who is Most Intelligent Among Heroes of DC?",
    answer: "Batman",
  },
  {
    question:
      "Who is the Perfect Adversary of batman and the Most Famous Villain of DC Comics?",
    answer: "Joker",
  },
  {
    question: "What is the Highest Grossing DC Comic Film?",
    answer: "Aquaman",
  },
  {
    question:
      "Can you tell whose dialogue is this 'When the chips are down, these... these civilized people, they'll eat each other. See, I'm not a monster. I'm just ahead of the curve'?",
    answer: "Joker",
  },
];

var score = 0;
if (userChoice.split(" ").join("").toLowerCase() === "marvel") {
  console.log(
    colourWithChalk.white.bgRedBright.bold("Welcome to Marvel Quiz...")
  );
  for (let i = 0; i < marvelQuestions.length; i++) {
    quiz(marvelQuestions[i].question, marvelQuestions[i].answer);
  }
} else if (userChoice.split(" ").join("").toLowerCase() === "dc") {
  console.log(
    colourWithChalk.black.bgGreen.bold("DC World Welcomes you to the Quiz...")
  );
  for (let i = 0; i < marvelQuestions.length; i++) {
    quiz(dcQuestions[i].question, dcQuestions[i].answer);
  }
}

function quiz(question, answer) {
  let userAnswer = readLine.question(question);
  if (userAnswer.split(" ").join("").toLowerCase() === answer.toLowerCase()) {
    console.log(colourWithChalk.bold.green("Correct"));
    score = score + 1;
  } else {
    console.log(colourWithChalk.bold.red("Wrong"));
  }

  console.log(colourWithChalk.bold.magenta("--------------------------------"));
  console.log("");
}

console.log(score);

var highestScores = [
  {
    name: "Shashank",
    score: 5,
  },
  {
    name: "Aakarsha",
    score: 4,
  },
  {
    name: "Shiva",
    score: 2,
  },
];

highestScores.push({ name: userName, score: score });
let sortedArray = highestScores.sort(function (a, b) {
  return b.score - a.score;
});

if (
  userChoice.split(" ").join("").toLowerCase() === "marvel" &&
  score >= sortedArray[0].score
) {
  console.log(
    colourWithChalk.white.bgRedBright.bold("You Are a True Marvel Fan")
  );
} else if (
  userChoice.split(" ").join("").toLowerCase() === "marvel" &&
  score < sortedArray[0].score
) {
  console.log("You are not a true Marvel Fan try again...");
}

if (
  userChoice.split(" ").join("").toLowerCase() === "dc" &&
  score >= sortedArray[0].score
) {
  console.log(colourWithChalk.black.bgGreen.bold("You Are a True DC Fan"));
} else if (
  userChoice.split(" ").join("").toLowerCase() === "dc" &&
  score < sortedArray[0].score
) {
  console.log("You are not a true DC Fan try again...");
}

console.log(" ");
console.log(" ");
console.log(colourWithChalk.bgCyanBright.redBright.bold("The Leaderboard: "));

for (let i = 1; i <= sortedArray.length; i++) {
  console.log(
    colourWithChalk.rgb(
      i * 200,
      i + 140,
      i + 60
    )(sortedArray[i - 1].name, sortedArray[i - 1].score)
  );
}
