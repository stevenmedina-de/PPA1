const bmi = require('./functions').bmi;
const retirement = require('./functions').retirement;
const shortestDistance = require('./functions').shortestDistance;
const splitTip = require('./functions').splitTip;

describe('BMI function should take height and weight and returns the body mass index', () => {
    it('should provide correct body mass index for input of weight and pounds', () => {
        expect(bmi(5, 3, 125)[1]).toBe(22.0);
    });
    it('should display the correct weight category for an associated BMI', () => {
        expect(bmi(5, 3, 125)[0]).toMatch('Normal weight');
    });
});

describe('Retirement function should take age, salary, percent saved and savings goal and returns age goal met or if goal not met', () => {
    it('should display correct age savings goal is met', () => {
        expect(retirement(25, 40000, .40, 500000)).toBe(49);
    });
    it('should display goal not met', () => {
        expect(retirement(25, 40000, .40, 2000000)).toMatch('Goal not met.');
    });
});

describe('Shortest distance function should display shortest distance between two points', () => {
    it('should correctly display shortest distance given two point coordinates', () => {
        expect(shortestDistance(-2, -4, -3, 4)).toBe(7.28);
    });
});

describe('Split tip function should return an object of guests and the amount the must pay', () => {
    it('should correctly display split tab to all guests', () => {
        expect(splitTip(15.16, 3)).toStrictEqual({ guest1: 5.81, guest2: 5.81, guest3: 5.81 });
    });
});