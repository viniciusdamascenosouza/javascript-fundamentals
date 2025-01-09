const firstSemesterGrade = 8.5;
const secondSemesterGrade = 9;

const grades = [firstSemesterGrade, secondSemesterGrade];

const total = firstSemesterGrade + secondSemesterGrade;

const average = total / grades.length;

console.log("total", total.toFixed(2)); // toFixed(2) is used to show only two decimal places
console.log("average", average.toFixed(2)); // total 17.50, average 8.75
