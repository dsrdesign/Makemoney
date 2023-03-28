import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexMarkers, ApexPlotOptions, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis } from "ng-apexcharts";
import { Observable } from "rxjs";
import { RevenusService } from "../list-revenu/revenu.service";
import { Revenu } from "../new-revenu/revenu";

export type ChartOptions = {

  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions?: ApexPlotOptions | any;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill?: ApexFill | any;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend?: ApexLegend | any;
  markers?: ApexMarkers | any;
  grid? : ApexGrid | any;
};

export let chartOptions: ChartOptions = {

  series: [
    {
      name: 'Cette semaine',
      data: [44, 42, 57, 86, 58,54,60],
      color: '#044999',
    },
    {
      name: 'La semaine dernière',
      data: [26, 35, 41, 78, 46,34,29,50],
      color: '#4c8bd3',
    },
  ],
  chart: {
    type: 'bar',
    height: 330,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '30%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 3,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['lun','mar','mer','jeu','ven','sam','dim'],
  },
  yaxis: {
    // title: {
    //   text: "$ (thousands)"
    // }
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands';
      },
    },
  },
};
