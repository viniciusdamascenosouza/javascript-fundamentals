const grades = [10, 6.5, 8, 7, 6];

const extraPoint = 1

const updatedGrades = grades.map((grade) => grade + extraPoint >= 10 ? 10 : grade + extraPoint)

console.log(updatedGrades)