#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const questions = [
    {
        question: "What is the capital of Pakistan?",
        choices: ["Lahore", "KP", "Islamabad"],
        answer: "Islamabad",
    },
    {
        question: "How many prayers daoes muslims pray?",
        choices: ["4", "7", "5"],
        answer: "5",
    },
    {
        question: "What are your experties?",
        choices: ["web developement", "ML", "Computer Vision"],
        answer: "Computer Vision",
    },
    {
        question: "What is your name?",
        choices: ["Imad", "Gulrukh", "Waqas"],
        answer: "Imad",
    },
    {
        question: "What is the city name?",
        choices: ["Lahore", "KP", "Islamabad"],
        answer: "KP",
    },
    {
        question: "Which phone do you use?",
        choices: ["Android", "Apple", "Xiaomi"],
        answer: "Android",
    },
    {
        question: "What are your grades?",
        choices: ["Below", "Average", "Topper"],
        answer: "Topper",
    }
];

async function runQuiz() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const response = await inquirer.prompt([
            {
                type: "list",
                name: "answer",
                message: questions[i].question,
                choices: questions[i].choices
            }
        ]);

        if (response.answer=== questions[i].answer) {
            score++;
            console.log(chalk.green("Nice ! Keep it up"));
            console.log(chalk.yellow("* has been upgraded"));
        } else {
            console.log(chalk.red("better luck next time"));
        }
    }
    console.log(`Your score: ${score} out of ${questions.length}`);
    const percentage = (score / questions.length)*100;
    console.log(`The Percentage of your score is : ${percentage}%`);

    function calculateStars(score) {
        
        let stars = Math.floor(percentage / 20);
    
        // Ensure stars are between 0 and 5
        stars = Math.min(5, stars);
    
        return stars;
    }
    const stars = calculateStars(score);
    console.log( "You got  "+ stars +chalk.bgBlueBright(" * "))
   
    
    if(percentage >=0 && percentage <= 40){
      console.log(chalk.greenBright(`Sorry We are Unable to promote you with this ${percentage}%`))
    }
    else if(percentage > 40 && percentage <= 70){
        console.log(chalk.blue(`you are an everage student with percentage of ${percentage}`))
    }
    else if(percentage > 70 && percentage <= 100){
        console.log(chalk.blue(`you are grade A student with percentage ${percentage}% we wish you a promising future ahead`))
    }
    else{
        console.log(chalk.bgRed("invalid result or system error"))
    }
    
}



runQuiz();
