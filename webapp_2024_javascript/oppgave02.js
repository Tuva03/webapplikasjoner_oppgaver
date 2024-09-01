const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Skriv to tallverdier, med mellomrom: ", (input) => {
  const [value1, value2] = input.split(" ");
  console.log(Number(value1) + Number(value2));
  r1.close();
});
