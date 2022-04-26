import React from "react";
import {
  AiFillPieChart,
  AiOutlineBarChart,
  AiOutlineLineChart,
} from "react-icons/ai";

export const CHART_TYPES = [
  { type: "pie", name: "Pie", Icon: AiFillPieChart },
  { type: "bar", name: "Bar", Icon: AiOutlineBarChart },
  { type: "line", name: "Line", Icon: AiOutlineLineChart },
];
export const CHART_MAP = CHART_TYPES.reduce((acc, d) => {
  return (acc[d.type] = d);
}, {});

export const CHART_KEYS = {
  PIE: "pie",
  BAR: "bar",
  LINE: "line",
};

export const CHART_METRICS = [
  { id: "price", name: "Price", selected: false },
  { id: "count", name: "Count", selected: false },
  { id: "account", name: "Account", selected: false },
];
