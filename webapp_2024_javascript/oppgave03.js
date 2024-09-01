const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question(
  "Skal du ha på munnbind? (1 = Ja, 2 = Nei, Ellers = Hold deg inne): ",
  (input) => {
    if (input == 1) {
      console.log("Ja");
    } else if (input == 2) {
      console.log("Nei");
    } else {
      console.log("Hold deg inne");
    }
    r1.close();
  }
);
