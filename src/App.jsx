import { useState } from "react";
import "./App.css";
import Chart from "./Components/Chart";
import data from "./data.js";

function App() {
  const [filter, setFilter] = useState("");

  const dataGroup = (data, typeKey, valueKey, filtered) => {
    if (filtered) {
      data = data.filter((item) => item.date === filtered);
    }

    const groupData = data.reduce((datasGroup, item) => {
      const type = item[typeKey];
      const value = item[valueKey];

      if (!datasGroup[type]) datasGroup[type] = [];
      datasGroup[type].push(value);
      return datasGroup;
    }, {});

    const object = {};

    for (const [key, value] of Object.entries(groupData)) {
      object[key] = value.reduce((a, b) => a + b, 0);
    }

    return object;
  };

  const yearGroupData = dataGroup(data, "date", "sales");
  const departmentGroupData = dataGroup(data, "department", "sales");
  const filteredYearGroupData = dataGroup(data, "department", "sales", filter);

  return (
    <>
      <div className="container">
        <Chart
          data={yearGroupData}
          title="Yıl Bazında Toplam Satış"
          width={500}
          height={320}
          xaxis="Yıllar"
          yaxis="Satışlar"
          filter={setFilter}
          yHeight={7500}
        />
        <Chart
          data={departmentGroupData}
          title="Departman Bazında Toplam Satış"
          width={500}
          height={320}
          xaxis="Departmanlar"
          yaxis="Satışlar"
          yHeight={7500}
        />
        {filter ? (
          <Chart
            data={filteredYearGroupData}
            title={filter + " Yılına Ait Departman Bazında Toplam Satış"}
            width={500}
            height={320}
            xaxis="Departmanlar"
            yaxis="Satışlar"
            yHeight={5000}
          />
        ) : null}
      </div>
    </>
  );
}

export default App;
