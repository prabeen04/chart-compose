import React from "react";
import BarChartExample from "./Chart/BarChartExample";
import LineChartExample from "./Chart/LineChartExample";
import PieChartExample from "./Chart/PieChartExample";

function ChartViewer(props) {
  console.log(props.selectedChart.chartName === "Bar Chart")

  return (

    <div style={{ border: "2px solid red", padding: "20px" }}>

      {props.selectedChart.chartName === "Bar Chart" ? (
        <>
          <BarChartExample data={props.selectedChart.data} />
        </>
      ) : props.selectedChart.chartName === "Line Chart" ? (
        <>
          <LineChartExample data={props.selectedChart.data} />
        </>
      ) : props.selectedChart.chartName === "Pie Chart" ? (
        <>
          <PieChartExample data={props.selectedChart.data} />
        </>
      ) : null}



    </div>
  )
}

export default ChartViewer