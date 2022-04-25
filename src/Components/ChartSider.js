import React from "react";

function ChartSider(props) {


  return (
    <div style={{ border: "2px solid gray", height: "50vh", padding: "20px", margin: "20px" }}>

      {props.ChartData.map((item) => {
        return (
          <div style={{ display: "flex" }}>
            <i style={{ padding: "6px" }} class={item.icon} ></i>
            <div style={{ cursor: "pointer", lineHeight: "25px" }}

              onClick={() => props.handleChartClick(item)}>{item.chartName}
            </div>
          </div>

        )
      })}



    </div >
  )
}

export default ChartSider