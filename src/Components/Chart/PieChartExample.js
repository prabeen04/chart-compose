import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];



export default function PieChartExample(props) {
  console.log(props)
  if (!props.data.length) {
    return (
      <p>select checkbox to show chart</p>
    )
  }
  return (
    <PieChart width={500} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={props.data}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />

      <Tooltip />
    </PieChart>
  );
}
