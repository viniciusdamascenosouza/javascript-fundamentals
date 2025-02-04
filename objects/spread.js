const student = {
  name: "Vinícius",
  age: 22,
  cpf: "12312312312",
  class: "Javascript",
  telephones: [919999999, 929999999],
  addresses: [
    {
      street: "Rua dos bobos",
      number: 10,
      complement: "Apto 101",
    },
    {
      street: "Rua dos bobos",
      number: 20,
      complement: "Apto 102",
    },
  ],
};

function screenTelephones(telephoneOne, telephoneTwo) {
  console.log(`Call ${telephoneOne}`);
  console.log(`Call ${telephoneTwo}`);
}

screenTelephones(student.telephones[0], student.telephones[1]);
screenTelephones(...student.telephones); // the best way to do it

