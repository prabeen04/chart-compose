import React from "react";
import { CHART_KEYS } from "../../utils";
import BarChart from "../BarChart";
import PieChart from "../PieChart";
import LineChart from "../LineChart";
import classes from "./styles.module.scss";

export default function ChartMap({ type, Icon, data, ...rest }) {
  function renderChart() {
    switch (type) {
      case CHART_KEYS.PIE:
        return <PieChart data={data} {...rest} />;
      case CHART_KEYS.BAR:
        return <BarChart data={data} {...rest} />;
      case CHART_KEYS.LINE:
        return <LineChart data={data} {...rest} />;
      default:
        <div>Invalid Chart Type :)</div>;
    }
  }

  if (!data)
    return (
      <div className={classes.container}>
        <div className={classes.noData}>
          <Icon />
          <h4>
            Please Select Some Metrics to render{" "}
            <b>{` "${type.toUpperCase()}" `}</b> Chart
          </h4>
        </div>
      </div>
    );

  return (
    <div className={classes.container} style={{ width: 600, height: 600 }}>
      {renderChart()}
    </div>
  );
}
