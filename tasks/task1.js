const fs = require("fs");
const createFrequencyChart = require("../helpers/createFrequencyChart.js");

const homophonePattern = /[a-z][0-9]/g;

// Need to learn about this encoding stuff
const text = fs.readFileSync("ciphertext.txt", "utf8");

// First collect all the homophones in an array
const result = text.match(homophonePattern) || [];

// Then count the occurrences of each homophone
const counts = {};
result.forEach((homophone) => {
  counts[homophone] = (counts[homophone] || 0) + 1;
});

createFrequencyChart(counts, "frequency-chart.png");
