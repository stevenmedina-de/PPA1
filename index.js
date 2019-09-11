const readlineSync = require('readline-sync');
const bmi = require('./functions').bmi;

function displayMainMenu() {
    console.log('\n');
    let option = readlineSync.question('Select an option (Enter a number):\n[1] Select function to execute\n[2] Exit\n');
    return option;
}

function displayFunctionsMenu() {
    console.log('\n');
    let option = readlineSync.question('Select an option (Enter a number):\n[1] Body Mass Index\n[2] Retirement Planning\n[3] Shortest Distance\n[4] Split Tab\n');
    console.log('option: ', option);
    return option;
}

function main() {
    let option = displayMainMenu();
    if (option == 1) {
        let functionChosen = displayFunctionsMenu();
        if (functionChosen == 1) {
            let feetHeight = readlineSync.question('Enter height in feet: ');
            let inchHeight = readlineSync.question('Enter height in inches: ');
            let weight = readlineSync.question('Enter weight: ');
            [bmiCategory, bodyMassIndex] = bmi(feetHeight, inchHeight, weight);
            console.log(`Your Body Mass Index is: ${bodyMassIndex}`);
            console.log(`Your BMI category is: ${bmiCategory}`);
        }
    } else {
        return;
    }
}

main();