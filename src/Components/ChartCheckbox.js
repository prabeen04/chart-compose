import React from "react";

function ChartCheckbox(props) {
  console.log(props)

  return (


    <div style={{ border: "2px solid red", padding: "20px", margin: "20px" }}>
      {props.selectedChart.checkBoxData && props.selectedChart.checkBoxData.map((item) => {
        return (
          <div>
            <input type="checkbox" id={item.id} onChange={(value) => { console.log(value) }} />
            <label> {item.name}</label>
          </div>
        )
      })}
    </div>

  )
}

export default ChartCheckbox