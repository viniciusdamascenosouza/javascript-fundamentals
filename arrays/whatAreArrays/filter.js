const students = [ 'John', 'Jane', 'Marie', 'Doe' ];
const averages = [ 90, 80, 85, 95 ];

const sizeNames = students.filter((students) => {
    return students.length <= 4;
})

console.log(sizeNames) 