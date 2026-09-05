const fs = require("fs");
const createFrequencyChart = require("../helpers/createFrequencyChart.js");

const homophonePattern = /[a-z][0-9]/g;
const outputFileName = "task1.png";

// Need to learn about this encoding stuff
const ciphertext = fs.readFileSync("ciphertext.txt", "utf8");

// First collect all the homophones in an array
const homophoneFrequencies = getFrequencies(ciphertext, homophonePattern);
createFrequencyChart(homophoneFrequencies, outputFileName);
