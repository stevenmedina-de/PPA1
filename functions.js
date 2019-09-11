function bmi(feetHeight, inchHeight, weight) {
    let weightInKg = weight * 0.45;
    let height = (feetHeight * 12) + inchHeight;
    let heightInM = height * 0.025;
    heightInM = heightInM * heightInM;
    let bodyMassIndex = weightInKg / heightInM;
    bodyMassIndex = Math.round(bodyMassIndex * 10) / 10;
    let bmiCategory = '';

    if (bodyMassIndex < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bodyMassIndex < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bodyMassIndex < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese'
    }

    return [bmiCategory, bodyMassIndex];
}

function retirement(age, salary, percentSaved, savingsGoal) {
    let savingsPerYear = salary * percentSaved;
    let totalSavingsYear = savingsPerYear * 1.35;
    let goal = 0;

    while (age < 100 && goal < savingsGoal) {
        goal += totalSavingsYear;
        age++;
    }
    if (age >= 100) {
        return 'Goal not met.'
    }
    if (goal > savingsGoal) {
        return age;
    }
}

function shortestDistance(x1, x2, y1, y2) {
    let distance = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
    distance = Math.round(distance * 100) / 100;

    return distance;
}

function splitTip(totalCost, numGuests) {
    let divided = (totalCost * 1.15) / numGuests;
    let splitCostNotExact = Math.round(divided * 100) / 100;
    let totalRounded = splitCostNotExact * 3;
    let leftoverCost = (totalCost * 1.15) - totalRounded;
    leftoverCost = Math.round(leftoverCost * 100) / 100;
    let guestTabList = [];

    for (let i = 0; i < numGuests; i++) {
        guestTabList[i] = splitCostNotExact;
    }
    let index = 0;
    while (leftoverCost > 0) {
        guestTabList[index] += 0.01;
        leftoverCost -= 0.01;
        if (index >= 2) {
            index = 0;
        } else {
            index++;
        }
    }

    let guestTab = {};
    for (let i = 0; i < numGuests; i++) {
        guestTab[`guest${i + 1}`] = guestTabList[i];
    }

    return guestTab;
}

module.exports.bmi = bmi;
module.exports.retirement = retirement;
module.exports.shortestDistance = shortestDistance;
module.exports.splitTip = splitTip;