// WITHOUT USING ARRAY
const gradeOne = 6
const gradeTwo = 5
const gradeThree = 7
const gradeFour = 10

const averageOne = (gradeOne + gradeTwo + gradeThree + gradeFour) / 4
console.log(averageOne) // 7

// USING ARRAY
const grades = [gradeOne, gradeTwo, gradeThree, gradeFour]

const averageTwo = grades.reduce((acc, grades) => acc + grades) / grades.length
console.log(averageTwo) // 7

// OR...
const averageThree = [(grades[0] + grades[1] + grades[2] + grades[3])] / grades.length
console.log(averageThree) // 7