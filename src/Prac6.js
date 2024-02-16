function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
}

function compareNumbers(num1, num2) {
    if (num1 === num2) {
        console.log(`${num1} is equal to ${num2}`);
    } else if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else {
        console.log(`${num1} is less than ${num2}`);
    }
}

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
}

function main() {
    checkEvenOdd(5);
    checkEvenOdd(10);

    compareNumbers(5, 10);
    compareNumbers(10, 5);
    compareNumbers(5, 5);

    checkLeapYear(2020);
    checkLeapYear(2021);
}

main();
