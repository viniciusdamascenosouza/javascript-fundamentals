const grades = [10, 6.5, 8, 7, 6];

let gradesSum = 0;

grades.forEach((grade) => {
    gradesSum += grade;
})

const average = gradesSum / grades.length;

console.log(`The average is ${average}.`); // 8