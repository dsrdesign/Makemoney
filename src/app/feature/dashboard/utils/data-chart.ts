import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexMarkers, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis } from "ng-apexcharts";
import { HomeService } from "../services/home.service";


// private sercive: depenseMoiis
export type ChartOptions = {

  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: any
  responsive: ApexResponsive[] | any;
  // dataLabels: ApexDataLabels;
  // plotOptions?: ApexPlotOptions | any;
  // yaxis: ApexYAxis;
  // xaxis: ApexXAxis;
  // fill?: ApexFill | any;
  // tooltip: ApexTooltip;
  // stroke: ApexStroke;
  // legend?: ApexLegend | any;
  // markers?: ApexMarkers | any;
  // grid? : ApexGrid | any;
};



export let chartOptions: ChartOptions = {

  // series: [
  //   {
  //     name: 'Revenus',
  //     data: [44, 42, 57, 100, 58,54,60],
  //     color: '#044999',
  //   },
  //   {
  //     name: 'Depenses',
  //     data: [26, 35, 41, 78, 46,34,29],
  //     color: '#73a8e6',
  //   },
  // ],
  // chart: {
  //   type: 'radialBar',
  //   height: 330,
  // },
  // plotOptions: {
  //   bar: {
  //     horizontal: false,
  //     columnWidth: '30%',
  //   },
  // },
  // dataLabels: {
  //   enabled: false,
  // },
  // stroke: {
  //   show: true,
  //   width: 1,
  //   colors: ['transparent'],
  // },
  // xaxis: {
  //   categories: ['lun','mar','mer','jeu','ven','sam','dim'],
  // },
  // yaxis: {
  //   // title: {
  //   //   text: "$ (thousands)"
  //   // }
  // },
  // fill: {
  //   opacity: 1,
  // },
  // tooltip: {
  //   y: {
  //     formatter: function (val) {
  //       return '$ ' + val + ' thousands';
  //     },
  //   },
  // },

  series: [44, 55],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Revenu", "Depense"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
};
