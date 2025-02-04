const student = {
  name: "Vinícius",
  age: 22,
  cpf: "12312312312",
  class: "Javascript",
  telephones: [919999999, 929999999],
  address: {
    street: "Rua dos bobos",
    number: 10,
    complement: "Apto 101",
  },
};

for (let key in student) {
  const type = typeof student[key];
  if (type !== "object" && type !== "function") {
    const text = `the key ${key} has a value ${student[key]}`;
    console.log(text);
  }
}
