const student = {
    name: "Vinícius",
    age: 22,
    cpf: "12312312312",
    class: "Javascript",
    telephones: [919999999, 929999999],
    adrress: {
      street: "Rua 1",
      number: 123,
      city: "Vinilandia",
    }
  };

  console.log(student.adrress); // { street: 'Rua 1', number: 123, city: 'Vinilandia' }
  console.log(student.adrress.city); // Vinilandia