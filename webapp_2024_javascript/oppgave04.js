const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question(
  "Konverter mellom valuta (NOK = NOK til USD, USD = USD til NOK): ",
  (input) => {
    if (input == "NOK") {
      r1.question("Hvor mange kroner til dollar? ", (amount) => {
        const convert = amount / 10;
        console.log(convert + "Dollar");
        r1.close();
      });
    } else if (input == "USD") {
      r1.question("Hvor mange dollar til kroner? ", (amount) => {
        const convert = amount * 10;
        console.log(convert + "Kroner");
        r1.close();
      });
    }
  }
);
