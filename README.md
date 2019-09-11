This project was written in NodeJS with the Jest testing framework. Since Jest allows tests for each function on a single file, the functions implemented are in functions.js and tests in functions.test.js. Each function is exported as a property of modules.export and thus imported individually in the test.js file. Each function has a description of what is being tested and the function code itself is tested using shoulds and expectations. The Body Mass Index takes inputs of height and weight and returns a BMI score and weight category. Its unit test tests for correct BMI score and correct weigth category. The Retirement function unit test tests that the correct age is displayed if goal is met or message saying that message isn't set. The Shortest Distance and Split Tip function unit test tests correct output given input.

Setup and Execution Instructions
- [NodeJS](https://nodejs.org/en/)
- To set up this application, download NodeJS from the above link and add it to Environment Variables 'Path' on Windows. Then run 'npm clone <github repository link>' in the command line in any chosen directory to get the files and run 'npm install' to get the dependency modules. To run the app, type 'npm start' and to run the Jest testing framework type 'npm run test'. 
- This is using NodeJS Version 8.11.1 and NPM Version 5.6.0 and was operated on the Windows 10 OS.

Report Output
![Screenshot of Output](/assets/Report Output.png)