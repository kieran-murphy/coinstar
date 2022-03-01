import React, { useEffect, useRef } from "react";
import { historyOptions } from "../chartConfigs/chartConfigs";
import { Chart } from "chart.js";

const HistoryChart = ({ data }) => {
  const { day, week, year, detail } = data;
  const chartRef = useRef();
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: "# of Votes",
              data: day,
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.4)",
              pointRadius: 0,
              borderWidth: 1,
            },
          ],
        },
        options: historyOptions,
      });
    }
  });
  return (
    <div className="bg-white border mt-2 rounded p-3">
      <div></div>
      <div>
        <canvas ref={chartRef} id="myChart" width={450} height={450}></canvas>
      </div>
    </div>
  );
};

export default HistoryChart;
