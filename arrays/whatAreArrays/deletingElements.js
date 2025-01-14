const grades = [10, 6, 8, 5.5, 10]

grades.pop() // Removes the last element of the array

const average = grades.reduce((acc, grades) => acc + grades) / grades.length


console.log(grades) // [10, 6, 8, 5.5]
console.log(average.toFixed(2)) // 7.38