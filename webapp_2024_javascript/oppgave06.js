list = [19, 22];

const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question(
  "Skriv inn 4 verdier å legge til listen, med mellomrom som skille: ",
  (input) => {
    const [value1, value2, value3, value4] = input.split(" ");
    list.push(value1, value2, value3, value4);
    console.log("Slik ser listen ut nå:", list);
    r1.close();
  }
);
