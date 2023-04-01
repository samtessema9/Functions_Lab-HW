// #1

const greetCustomer = (name) => {
    console.log(`Hello ${name}`);
}

// #2

const logPositiveOrNegative = (number) => {
    if (number > 0) {
        console.log('Positive');
    } else if (number < 0) {
        console.log('Negative');
    } else {
        console.log('Zero');
    }
}

// #3

const returnIsPositive = (number) => {
    if (number >= 0) {
        return true;
    } else {
        return false;
    }
}

// #4

const returnIsTooShort = (password) => {
    if (password.length >= 8) {
        return true;
    } else {
        return false;
    }
}

// #5

const returnIsBreakingLaw = (age, drink) => {
    if (age < 21 && drink === 'alcohol') {
        return true;
    } else {
        return false;
    }
}

// #6

let count = 0;

const addToCount = (number) => {
    count += number;
}

addToCount(1);
addToCount(2);
addToCount(3);
addToCount(4);

console.log(count);

// #7

const returnIsChase = (name) => {
    if (name.toLowerCase() === 'chase') {
        return true;
    } else {
        return false;
    }
}

// #8

let classMembers = ["Sally", "Sam", "Frodo", "Gandalf", "Eragorn", "Gimley"];

const returnClassIsTooSmall = (students) => {
    if (students.length < 10) {
        return true;
    } else {
        return false;
    }
}

console.log(returnClassIsTooSmall(classMembers));

// #9

const combineStrings = (stringOne, stringTwo) => {
    return stringOne + stringTwo;
}

console.log(combineStrings("Hello ", "World"));
console.log(combineStrings("Hey ", "There"));
console.log(combineStrings('Sam ', 'Tessema'));

// #10

const returnDataType = (data) => {
    console.log(typeof data);
}

returnDataType(1);

// #11

const addStudentToClass = (student) => {
    classMembers.push(student);
}

addStudentToClass('Johnathan');
addStudentToClass('Sataporn');


// #12

let extraStudents = ['bill', 'jim', 'jane', 'james', 'steve', 'rachel', 'maria', 'david', 'kevin', 'tri', 'ben'];

const fillClass = () => {
    let numOfStudents = classMembers.length;
    while (numOfStudents <= 14) {
        let student = extraStudents.shift();
        classMembers.push(student);
        numOfStudents++;
    }
}

