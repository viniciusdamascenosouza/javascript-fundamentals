const classroomJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const classroomJava = [6, 5, 8, 9, 5, 6];
const classroomPython = [7, 3.5, 8, 9.5];

function calculateAverage(gradesList) {
  const sumGrades = gradesList.reduce((acc, grade) => {
    return acc + grade;
  }, 0);
  const average = sumGrades / gradesList.length;
  return average;
}

console.log(calculateAverage(classroomJS))
console.log(calculateAverage(classroomJava))
console.log(calculateAverage(classroomPython))

function calculateAverageReduced(gradesList) {
    const sumGrades = gradesList.reduce((acc, grade) => acc + grade, 0)
    const average = sumGrades / gradesList.length
    return average
}

console.log(calculateAverageReduced(classroomJS))
console.log(calculateAverageReduced(classroomJava))
console.log(calculateAverageReduced(classroomPython))
