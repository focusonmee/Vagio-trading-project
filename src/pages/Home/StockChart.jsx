import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Button } from "@/components/ui/button";

const StockChart = () => {
  const [activeLable, setActiveLabel] = useState("1 Day");
  const series = [
    {
      data: [
        [1733490215159, 97830.483957109],
        [1733493812743, 98694.3824613745],
        [1733497414542, 99609.2756499518],
        [1733501328768, 99489.604559472],
        [1733504644596, 99271.757616421],
        [1733508109503, 100859.981357168],
        [1733511809592, 101590.521373369],
        [1733515403717, 101575.641760633],
        [1733518923453, 101413.675389175],
        [1733522594917, 100557.529599334],
        [1733526210193, 100648.833175031],
        [1733529808282, 99928.0552148145],
        [1733533403971, 100408.745126878],
        [1733537006551, 100183.565802687],
        [1733540467104, 100076.361393978],
        [1733544201922, 99431.7288518576],
        [1733547630766, 99699.5525970519],
        [1733551328136, 99260.7289379083],
        [1733555109514, 99491.3161121772],
        [1733558584634, 99596.4318671227],
        [1733562022214, 99648.4048433753],
        [1733565807707, 99777.65421197],
        [1733569241969, 99639.9331800321],
        [1733572937623, 99746.1701863456],
        [1733576460982, 99545.5121605343],
        [1733580148302, 99454.3992194296],
        [1733583802819, 99547.6042071835],
        [1733587404734, 99877.3841454008],
        [1733591001691, 99696.2523291678],
        [1733594481419, 99717.2700314381],
        [1733598047245, 100316.740219965],
        [1733601740382, 100150.460045807],
        [1733605405765, 100387.432776886],
        [1733609001466, 99986.2742803779],
        [1733612496020, 99714.6221953798],
        [1733616033051, 99781.8299919817],
        [1733619689665, 100093.919811424],
        [1733623332314, 99862.7641596829],
        [1733627006418, 100196.214009338],
        [1733630596102, 100000.430223274],
        [1733634212400, 99810.9271791324],
        [1733637609360, 99447.6072445436],
        [1733641368848, 99732.4409525968],
        [1733645010427, 99723.3181530238],
      ],
    },
  ];
  const timeSeries = [
    {
      keyword: "DIGITAL_CURRENCY_DAILY",
      key: "Time Series (Daily)",
      label: "1 Day",
      value: 1,
    },
    {
      keyword: "DIGITAL_CURRENCY_WEEKLY",
      key: "Weekly Time Series",
      label: "1 Week",
      value: 7,
    },
    {
      keyword: "DIGITAL_CURRENCY_MONTHLY",
      key: "Month Time Series",
      label: "1 Month",
      value: 30,
    },
  ];
  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      width: "100%",
      zoom: {
        autoScaleYaxis: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6,
    },
    colors: ["#758AA2"],
    markers: {
      // Corrected from 'markets' to 'markers'
      color: ["#fff"],
      strokeColor: "#fff",
      size: 0,
      strokeWidth: 1,
      style: "hollow",
    },
    tooltip: {
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: "#47535E",
      strokeDashArray: 4,
      show: true,
    },
  };
  const handleActiveLabel = (value) => {
    setActiveLabel(value);
  };
  return (
    <div>
      <div className="space-x-3">
        {timeSeries.map((item) => (
          <Button
            variant={activeLable == item.label ? "" : "outline"}
            onClick={() => handleActiveLabel(item.label)}
            key={item.label}
          >
            {item.label}
          </Button>
        ))}
      </div>
      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={series} // Updated variable reference
          type="area"
          height={500}
        />
      </div>
    </div>
  );
};

export default StockChart;
