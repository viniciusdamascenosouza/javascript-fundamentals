const grades = [10, 6, 8]

const newGrade = grades.push(7)

console.log(grades)

const average = grades.reduce((acc, grades) => acc + grades) / grades.length

console.log(average) // 7.75