const readline = require("readline")

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const value1 = "10"

r1.question("Skriv et tall: ", (value2) => {
    console.log(Number(value1) + Number(value2))
    r1.close()
})
