import React, { useState } from "react";
import ChartSider from "./ChartSider";
import ChartViewer from "./ChartViewer";
import ChartCheckbox from "./ChartCheckbox";

export default function MainChart() {
  const ChartData = [{
    chartName: "Line Chart", id: 1, icon: "fa fa-line-chart",
    checkBoxData: [{ name: "price" }, { name: "volume" }, { name: "rate" }],
    data: [


    ]

  },
  {
    chartName: "Bar Chart", id: 2, icon: "fa fa-bar-chart",
    checkBoxData: [{ name: "name" }, { name: "rate" }, { name: "tag" }],
    data: [


    ]

  },
  {
    chartName: "Pie Chart", id: 3, icon: "fa fa-pie-chart",
    checkBoxData: [{ name: "volume" }, { name: "string" }, { name: "rate" }],
    data: [
    ]

  }]

  const [selectedChart, setSelectedChart] = useState({});
  const [checkBoxData, setcheckBoxData] = useState([])
  function handleChartClick(data) {

    setSelectedChart(data)
  }

  function handleCheckboxClicked() {

  }
  return (
    <div style={{ display: "flex" }}>
      <ChartSider ChartData={ChartData} handleChartClick={handleChartClick} />
      {selectedChart.id && (
        <>
          <ChartViewer selectedChart={selectedChart} />
          <ChartCheckbox selectedChart={selectedChart} />
        </>
      )}
    </div>
  )
}