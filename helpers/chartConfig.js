function getChartConfiguration(
  labels,
  dataPoints,
  title = "Frequency Distribution",
  xAxisTitle = "Categories",
  yAxisTitle = "Frequency",
) {
  return {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Frequency count",
          data: dataPoints,
          backgroundColor: "#d75d69",
          hoverBackgroundColor: "#c34e5a",
          borderColor: "#d75d69",
          borderWidth: 0,
          borderRadius: { topLeft: 6, topRight: 6 },
          borderSkipped: "bottom",
          categoryPercentage: 0.88,
          barPercentage: 0.86,
          maxBarThickness: 24,
        },
      ],
    },
    options: {
      responsive: false,
      animation: false,
      layout: {
        padding: {
          top: 48,
          right: 48,
          bottom: 32,
          left: 40,
        },
      },
      plugins: {
        title: {
          display: true,
          align: "start",
          text: title,
          color: "#3f2226",
          font: {
            size: 36,
            weight: "bold",
          },
          padding: {
            top: 10,
            bottom: 20,
          },
        },
        legend: {
          display: true,
          position: "top",
          align: "start",
          labels: {
            color: "#7a2a35",
            font: {
              size: 17,
            },
            boxWidth: 14,
            boxHeight: 14,
            usePointStyle: true,
            pointStyle: "rectRounded",
            padding: 24,
          },
        },
      },
      scales: {
        x: {
          border: { display: false },
          grid: {
            display: false,
          },
          ticks: {
            color: "#7a2a35",
            font: {
              size: 14,
              weight: "400",
            },
            autoSkip: false,
            maxRotation: 90,
            minRotation: 90,
            padding: 10,
          },
          title: {
            display: true,
            text: xAxisTitle,
            color: "#8c4b54",
            font: {
              size: 18,
              weight: "600",
            },
            padding: { top: 22 },
          },
        },
        y: {
          beginAtZero: true,
          grace: "5%",
          border: { display: false },
          grid: {
            color: "#e8c8ce",
            drawTicks: false,
          },
          ticks: {
            color: "#8c4b54",
            font: {
              size: 16,
            },
            padding: 14,
            precision: 0,
            maxTicksLimit: 7,
          },
          title: {
            display: true,
            text: yAxisTitle,
            color: "#8c4b54",
            font: {
              size: 18,
              weight: "600",
            },
            padding: { bottom: 12 },
          },
        },
      },
    },
  };
}

module.exports = { getChartConfiguration };
