# Apex Charts Türkçe Dökümantasyon

ApexCharts NPM Paketi; Javascript, React, Vue, Angular kullanabileceğimiz bir görselleştirme kütüphanesi diyebiliriz. Özellike veri setlerimizin görselleştirme işlemlerinde detaylı olarak kullanabileceğimiz bir NPM paketidir.

## Paket Kurulumlarının Yapılması

### React Kurulumu

```js
npm create vite@latest
npm install
```

### Apex Charts Kurulumu

```js
npm install react-apexcharts apexcharts
```

Kurulum işlemleri yapıldıktan sonra, ApexCharts verilerimiz aşağıdaki şekilde import ile kullanmaya başlayabiliriz.

```js
import ReactApexChart from "react-apexcharts";
```

İçeri aktarma işlemlerinden sonra aşağıdaki şekilde componentimizi kullanmaya başlayabiliriz.

```js
<ReactApexChart
  options={chartOptions.options}
  series={chartOptions.series}
  type={chartOptions.options.chart.type}
  width={width}
  height={height}
/>
```

## Sırasıyla Yapılan Aşamalar

- "options" kısmı grafik ayarlarımızda kullanacığımız config verileridir.

- "seris" kısmı ise verilerimizin sayısal verileri ekleyeceğimiz alandır.

- "type" kısmı ise grafiğimizin türünü belirlemektedir.

## Options Örnek Config

```js
const chartOptions = {
  options: {
    chart: {
      id: "apexchart-example",
      fontFamily: "Candara, Arial, sans-serif",
      type: chart,
      events: {
        click: function (chart, config, e) {
          const value = config.w.globals.labels[e.dataPointIndex];
          filter(Object.keys(data)[value - 1]);
        },
      },
    },
    xaxis: {
      categories: Object.keys(data),
      title: {
        text: xaxis,
      },
    },
    yaxis: {
      min: 0,
      max: yHeight,
      title: {
        text: yaxis,
        style: {
          fontSize: "11px",
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "11%",
        borderRadius: 5,
        dataLabels: {
          position: "center",
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#2b908f"],
      },
    },
    theme: {
      mode: "light",
      palette: "palette5",
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      width: 3,
      dashArray: 0,
    },
  },
  series: [
    {
      name: "series-1",
      data: Object.values(data),
    },
  ],
};
```
