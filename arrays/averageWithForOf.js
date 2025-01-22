const grades = [10, 6.5, 8, 7.5];

let gradeSum = 0;

for (let grade of grades) {
    gradeSum += grade;
}

const averages = gradeSum / grades.length;

console.log(`The average is ${averages}`); // The average is 8