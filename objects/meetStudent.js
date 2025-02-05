const students = require('./students.json');

function searchInfo(list, key, value) {
    return list.find((student) => student[key] === value);
}

const studentFound = searchInfo(students, 'nome', 'Juliet')
console.log(studentFound)

const telephoneStudent = searchInfo(students, 'telefone', '1198123183')
console.log(telephoneStudent)