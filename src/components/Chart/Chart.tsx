import "./Chart.css";
import ChartBar from "./ChartBar";

interface ChartProps {
  dataPoints: {
    label: string;
    value: number;
  }[];
}

const Chart: React.FC<ChartProps> = (props) => {
  const dataPointValues = props.dataPoints.map((datapoint) => datapoint.value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} max={maxValue} {...dataPoint} />
      ))}
    </div>
  );
};

export default Chart;
