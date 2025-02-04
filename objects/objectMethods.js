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
  
const keyObjects = Object.keys(student);
console.log(keyObjects);

if(!keyObjects.includes('addresses')) {
    console.log('is necessary to have the addresses key!');
} else {
    console.log('the key addresses is present!');
}