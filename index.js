var rs = require("readline-sync");
const chalk = require("chalk");

var score = 0;
var highscore = 35;
const questions = require("./data");
let green = chalk.bold.green;
let gray = chalk.bold.gray;
let red = chalk.bold.red;
let cyan = chalk.bold.cyan;
let yellow = chalk.bold.yellow;
let title = chalk.black.bold.bgYellow;
let magenta =chalk.bold.magenta;

console.log(title("--: Welcome to Exercise Quiz On Health And Fitness :-- \n"));
let user = rs.question("Enter Your Name : ");
console.log(green(`\n Hello ${user}`));

console.log("\nThere will be 5 questions.");
console.log(green("+5"), "points for correct answer.", red("-2"), "points for wrong answer.\n");

for (q of questions) {
  console.log(yellow(q.no + ': ' + q.question));
  console.log(cyan('A: ' + q.A));
  console.log(cyan('B: ' + q.B));
  console.log(cyan('C: ' + q.C));
  console.log(cyan('D: ' + q.D));

  var ans = rs.question('Answer : ');
  if (ans.toUpperCase() === q.answer) {
    console.log(green("\n+5"), "Your answer is", green("correct"), ".");
    score += 5;
    console.log("Your current score is", magenta(score), "\n");
  } else {
    console.log(red("-2"), "Your answer is", red("incorrect"), ".");
    console.log("Correct Answer :", green(q.answer));
    score -= 2;
    console.log("Your current score is", magenta(score), "\n");
  }
}
if (score > highscore) {
  console.log(green("Congratulation... \n You Beat the best score."))
} else {
  console.log(red("You couldn't beat the highscore. Better luck next time!\n"))
}

console.log(yellow("\n ---: Scoreboard :---"))
console.log(  magenta(user) + ' Your final score is : ' + magenta(score))