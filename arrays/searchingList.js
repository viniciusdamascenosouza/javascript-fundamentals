const students = ["Jhon", "Julian", "Caio", "Ana"];
const averages = [10, 8, 7.5, 9];

const list = [students, averages]

function screenStudentsAndGrade (student) {
    if(list[0].includes(student)) {
        const index = list[0].indexOf(student)
        const averageStudent = list[1][index]
        console.log(`${student} has an average of ${averageStudent} points.`)
    } else {
        console.log("student not on the registration list")
    }
}

screenStudentsAndGrade("Jhon")