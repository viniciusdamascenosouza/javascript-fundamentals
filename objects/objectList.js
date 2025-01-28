const student = {
    name: "Vinícius",
    age: 22,
    cpf: "12312312312",
    class: "Javascript",
    telephones: [919999999, 929999999],
    addresses: [{
      street: "Rua 1",
      number: 123,
      city: "Vinilandia",
      complement: "Casa"
    }]
  };

  student.address.push({
    street: "Rua 90",
    number: 321,
    city: "Vinilandia",
  })

  const addressStudentList = student.address;

  console.log(addressStudentList); // [ { street: 'Rua 1', number: 123, city: 'Vinilandia' }, { street: 'Rua 90', number: 321, city: 'Vinilandia' } ]

  const addressStudentListWithComplement = addressStudentList.filter((address) => address.complement)

  console.log(addressStudentListWithComplement); // [ { street: 'Rua 1', number: 123, city: 'Vinilandia', complement: 'Casa' } ]