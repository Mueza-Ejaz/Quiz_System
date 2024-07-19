#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const quiz : {

                        question_1 : string,
                        question_2 : string,
                        question_3 : string,
                        question_4 : string,
                        question_5 : string,

} = await inquirer .prompt(

    [


            {
               name : "question_1",
               type : "list",
               message : chalk.green("Q.1: Which of the following data types does not exist in TypeScript?\n"),
               choices : ["Number", "String", "Boolean", "Character"]
           },

              {
                 name : "question_2",
                 type : "list",
                 message : chalk.green("Q.2: How do you define an interface in TypeScript?\n"),
                 choices : ["interface", "class", "type", "struct"]
              },

            {

               name : "question_3",
               type : "list",
               message : chalk.green("Q.3: How do you define an enum in TypeScript?\n"),
               choices : ["enum Color {Red, Green, Blue}", "type Color {Red, Green, Blue}", "var Color = {Red, Green, Blue}", "class Color {Red, Green, Blue}"]

            },

           {
               name : "question_4",
               type : "list",
               message : chalk.green("Q.4: How do you export a module in TypeScript?\n"),
               choices : ["export { MyModule }", "module.exports = MyModule", "export default MyModule", "export = MyModule"]

           },

           {
              name : "question_5",
              type : "list",
              message : chalk.green("Q.5: How do you define a type alias in TypeScript?\n"),
              choices : ["type Name = string;", "alias Name = string;", "let Name: string;", "typedef Name = string;"]

         }
    ]);

let score: number = 0;

switch (quiz.question_1) {
    case "Character":
          console.log(chalk.yellow("1. Correct!"));
          ++score;
        break;

    default:
        console.log(chalk.red("1. Incorrect!"));
        
}

switch (quiz.question_2) {
    case "interface":
          console.log(chalk.yellow("2. Correct!"));
          ++score;
        break;

    default:
        console.log(chalk.red("2. Incorrect!"));
        
}

switch (quiz.question_3) {
    case "enum Color {Red, Green, Blue}":
          console.log(chalk.yellow("3. Correct!"));
          ++score;
        break;

    default:
        console.log(chalk.red("3. Incorrect!"));
        
}

switch (quiz.question_4) {
    case "export default MyModule":
          console.log(chalk.yellow("4. Correct!"));
          ++score;
        break;

    default:
        console.log(chalk.red("4. Incorrect!"));
        
}

switch (quiz.question_5) {
    case "type Name = string;":
          console.log(chalk.yellow("5. Correct!"));
          ++score;
        break;

    default:
        console.log(chalk.red("5. Incorrect!"));
        
}

console.log(`Score: ${score}`);



