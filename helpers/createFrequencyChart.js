const fs = require("fs");
const { ChartJSNodeCanvas } = require("chartjs-node-canvas");
const { getChartConfiguration } = require("./chartConfig.js");

const width = 2400;
const height = 1200;

const chartJSNodeCanvas = new ChartJSNodeCanvas({
  width,
  height,
  backgroundColour: "#fbeff0",
});

async function createFrequencyChart(
  frequencyMap,
  outputFileName = "frequency-chart.png",
  title,
  xAxisTitle,
  yAxisTitle,
) {
  const keys = Object.keys(frequencyMap);
  const labels = keys;
  const dataPoints = keys.map((k) => frequencyMap[k]);

  const configuration = getChartConfiguration(labels, dataPoints, title, xAxisTitle, yAxisTitle);

  try {
    const imageBuffer = await chartJSNodeCanvas.renderToBuffer(configuration);
    fs.writeFileSync(outputFileName, imageBuffer);
    console.log(`Frequency bar chart has been successfully saved. ${outputFileName}`);
  } catch (error) {
    console.error("Error creating chart:", error);
  }
}

module.exports = createFrequencyChart;
