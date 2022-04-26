import classes from "./App.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { CHART_KEYS, CHART_METRICS, CHART_TYPES } from "./utils";
import ChartMap from "./components/ChartMap";
import { ChartService } from "./service/ChartService";

function App() {
  const [selectedChart, setSelectedChart] = useState(CHART_TYPES[0]);
  const [metrics, setMetrics] = useState(CHART_METRICS);
  const [chartData, setChartData] = useState(null);
  const [isLoadingChartData, setIsLoadingChartData] = useState(false);

  useEffect(() => {
    if (!selectedChart) return;
    if (!metrics.some((d) => d.selected)) return;
    fetchChartData(selectedChart.type);
  }, [selectedChart, metrics]);

  async function fetchChartData(type) {
    debugger;
    setIsLoadingChartData(true);
    try {
      let fn;
      debugger;
      switch (type) {
        case CHART_KEYS.PIE:
          fn = ChartService.getPieChartData;
          break;
        case CHART_KEYS.BAR:
          fn = ChartService.getBarChartData;
          break;
        case CHART_KEYS.LINE:
          fn = ChartService.getLineChartData;
          break;
        default:
          console.error("Invalid Chart Type");
      }
      const data = await fn();
      setChartData(data);
      setIsLoadingChartData(false);
    } catch (error) {
      setIsLoadingChartData(false);
    }
  }

  return (
    <div className={classes.App}>
      {/* render chart control types */}
      <div className={classes.chartControls}>
        {CHART_TYPES.map((d) => (
          <div
            key={d.type}
            className={clsx(
              classes.iconBox,
              d.name === selectedChart.name && classes.selected
            )}
            onClick={() => setSelectedChart(d)}
          >
            <d.Icon />
            {d.name}
          </div>
        ))}
      </div>
      {/* render chart Body */}
      <div className={classes.chartBody}>
        {isLoadingChartData ? (
          <div className={classes.loading}>Loading Chart Data...</div>
        ) : !chartData?.length ? (
          <div className={classes.empty}>--No Data--</div>
        ) : (
          <ChartMap
            type={selectedChart.type}
            Icon={selectedChart.Icon}
            data={chartData}
          />
        )}
      </div>

      {/* render chart metrics types */}
      <div className={classes.metrics}>
        {metrics.map((d) => (
          <div key={d.id}>
            <input
              type="checkbox"
              checked={d.selected}
              onChange={(e) => {
                setMetrics((v) => {
                  return v.map((x) =>
                    x.id === d.id ? { ...x, selected: e.target.checked } : x
                  );
                });
              }}
            />
            <label> {d.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
