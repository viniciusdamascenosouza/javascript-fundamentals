const grades = [10, 6.5, 8, 7.5];

let gradesSum = 0;

for (let i = 0; i < grades.length; i++) {
  gradesSum += grades[i];
}

const average = gradesSum / grades.length;

console.log(`The average is ${average}`); // The average is 8
