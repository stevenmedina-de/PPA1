const readlineSync = require('readline-sync');
const mongoose = require('mongoose');

const BMI = require('./models/bmiSchema')
const shortDistModels = require('./models/shortestDistanceSchema')

const bmi = require('./functions').bmi;
const retirement = require('./functions').retirement;
const shortestDistance = require('./functions').shortestDistance;
const splitTip = require('./functions').splitTip;

function displayMainMenu() {
    console.log('\n');
    let option = readlineSync.question('Select an option (Enter a number):\n[1] Select function to execute\n[2] Exit\n');
    return option;
}

function displayFunctionsMenu() {
    console.log('\n');
    let option = readlineSync.question('Select an option (Enter a number):\n[1] Body Mass Index\n[2] Retirement Planning\n[3] Shortest Distance\n[4] Split Tab\n[5] Exit\n');
    return option;
}

async function displayBMI() {
    try {
        const results = await BMI.find({})
        console.log(results)
    } catch (error) {
        console.log(error)
    }
}

async function displayShortDis() {
    try {
        const results = await shortDistModels.find({})
        console.log(results)
    } catch (error) {
        console.log(error)
    }
}

async function saveBMIData(inputs, outputs) {
    const newData = new BMI({
        inputs: inputs,
        outputs: outputs
    })
    await newData.save()
}

async function saveShortDisData(inputs, output) {
    const newData = new shortDistModels({
        inputs: inputs,
        outputs: output
    })
    await newData.save()
}

async function main() {
    await mongoose.connect('mongodb://master:password0@ds129233.mlab.com:29233/ppa2', { useNewUrlParser: true, useUnifiedTopology: true })

    let running = true;
    while (running) {
        let option = displayMainMenu();
        if (option == 1) {
            let submenu = true;
            while (submenu) {
                let functionChosen = displayFunctionsMenu();
                if (functionChosen == 1) {
                    displayBMI()
                    let feetHeight = readlineSync.question('Enter height in feet: ');
                    let inchHeight = readlineSync.question('Enter height in inches: ');
                    let weight = readlineSync.question('Enter weight: ');
                    [bmiCategory, bodyMassIndex] = bmi(feetHeight, inchHeight, weight);
                    console.log(`Your Body Mass Index is: ${bodyMassIndex}`);
                    console.log(`Your BMI category is: ${bmiCategory}`);
                    saveBMIData([feetHeight, inchHeight, weight], [bmiCategory, bodyMassIndex])
                } else if (functionChosen == 2) {
                    let age = readlineSync.question('Enter your age: ');
                    let salary = readlineSync.question("Enter your salary: ");
                    let percentSaved = readlineSync.question("Enter percent of salary saved as decimal: ");
                    let savingsGoal = readlineSync.question("Enter savings goal: ");
                    let goal = retirement(age, salary, percentSaved, savingsGoal);
                    console.log(`Your goal is expected to be met at age: ${goal}`);
                } else if (functionChosen == 3) {
                    displayShortDis()
                    let x1 = readlineSync.question('Enter x-coordinate of first point: ');
                    let y1 = readlineSync.question('Enter y-coordinate of first point: ');
                    let x2 = readlineSync.question('Enter x-coordinate of second point: ');
                    let y2 = readlineSync.question('Enter y-coordinate of second point: ');
                    let distance = shortestDistance(x1, x2, y1, y2);
                    console.log(`The shortest distance is ${distance}`);
                    saveShortDisData([x1, x2, y1, y2], distance)
                } else if (functionChosen == 4) {
                    let totalCost = readlineSync.question('Enter total amount of dinner without tip: ');
                    let numGuests = readlineSync.question('Enter number of people to split amongst: ');
                    let guestTabs = splitTip(totalCost, numGuests);
                    console.log(`Here is the guest list and amount to pay: ${JSON.stringify(guestTabs)}`);
                } else if (functionChosen == 5) {
                    await mongoose.disconnect()
                    submenu = false;
                    running = false;
                    return;
                }
            }
        } else {
            running = false;;
        }
    }
}

main();