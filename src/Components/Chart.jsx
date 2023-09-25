import { useEffect, useReducer, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Chart = ({
  data,
  title,
  width,
  height,
  xaxis,
  yaxis,
  filter,
  yHeight,
}) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "bar":
        return (state = "bar");
      case "line":
        return (state = "line");
      case "area":
        return (state = "area");
    }
  };
  const [chart, dispatch] = useReducer(reducer, "line");

  const chartOptions = {
    options: {
      chart: {
        id: "apexchart-example",
        fontFamily: "Candara, Arial, sans-serif",
        type: chart,
        events: {
          click: function (chart, config, e) {
            const value = config.w.globals.labels[e.dataPointIndex];
            filter(Object.keys(data)[value - 1]);
          },
        },
      },
      xaxis: {
        categories: Object.keys(data),
        title: {
          text: xaxis,
        },
      },
      yaxis: {
        min: 0,
        max: yHeight,
        title: {
          text: yaxis,
          style: {
            fontSize: "11px",
          },
        },
      },
      plotOptions: {
        bar: {
          columnWidth: "11%",
          borderRadius: 5,
          dataLabels: {
            position: "center",
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#2b908f"],
        },
      },
      theme: {
        mode: "light",
        palette: "palette5",
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        width: 3,
        dashArray: 0,
      },
    },
    series: [
      {
        name: "series-1",
        data: Object.values(data),
      },
    ],
  };

  return (
    <>
      <div className="chart-container">
        <article className="chart-title">{title}</article>
        <div className="chart-button-group">
          <button onClick={() => dispatch({ type: "bar" })}>Bar Chart</button>
          <button onClick={() => dispatch({ type: "line" })}>Line Chart</button>
          <button onClick={() => dispatch({ type: "area" })}>Area Chart</button>
        </div>
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type={chartOptions.options.chart.type}
        />
      </div>
    </>
  );
};

export default Chart;
