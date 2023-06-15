import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexLegend,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip
} from "ng-apexcharts";

import { Component, OnInit, ViewChild } from '@angular/core';
// import { chartOptions } from '../../utils/data-chart';
import { HomeService } from '../../services/home.service';


export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  labels: string[] | any;
  plotOptions: ApexPlotOptions | any;
  fill: ApexFill | any;
  legend: ApexLegend | any;
  stroke: ApexStroke | any;
};

export type ChartOption1 = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels  | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartRevenu: Partial<ChartOptions>;
  public chartDepense: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;

  public chartOptionG: Partial<ChartOption1>;



   depenseMois: number = 0
   revenuMois: number = 0

   pourcentRevenu: number = 0
   pourcentDepense: number = 0

  //  montantMois: number = []



  constructor(private homeService: HomeService){
    this.chartRevenu = {
      series: [this.pourcentRevenu],
      chart: {
        height: 200,
        type: "radialBar",
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "7%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: false,
              color: "#888",
              fontSize: "17px"
            },
            value: {
              formatter: function(val: { toString: () => string; }) {
                return parseInt(val.toString(), 10).toString() + '%';
              },
              color: "#111",
              fontSize: "36px",
              show: true
            }
          }
        }
      },
      fill: {
        show: false,
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Percent"]
    };

    this.chartDepense = {
      series: [this.pourcentDepense],
      chart: {
        height: 200,
        type: "radialBar",
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "7%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: false,
              color: "#888",
              fontSize: "17px"
            },
            value: {
              formatter: function(val: { toString: () => string; }) {
                return parseInt(val.toString(), 10).toString() + '%';
              },
              color: "#111",
              fontSize: "36px",
              show: true
            }
          }
        }
      },
      fill: {
        show: false,
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Percent"]
    };

    this.chartOptions2 = {
      series: [this.depenseMois],
      chart: {
        height: 200,
        type: "radialBar",
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "7%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: false,
              color: "#888",
              fontSize: "17px"
            },
            value: {
              formatter: function(val: { toString: () => string; }) {
                return parseInt(val.toString(), 10).toString() + '%';
              },
              color: "#111",
              fontSize: "36px",
              show: true
            }
          }
        }
      },
      fill: {
        show: false,
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Percent"]
    };

    this.chartOptionG = {
      series: [
        {
          name: "Depenses",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenus",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ]
      },
      yaxis: {
        title: {
          text: "CFA (Mille)"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val: string) {
            return "CFA " + val + " Mille";
          }
        }
      }
    };

  }

  ngOnInit(): void {
    this.homeService.getActionDuMois("depense").subscribe(res =>{
      this.depenseMois = res.data

      // this.pourcentDepense = (this.depenseMois/this.revenuMois)*100

      // this.chartOptions2 = {
      //   series: [this.pourcentDepense],
      //   chart: {
      //     height: 200,
      //     type: "radialBar",
      //     toolbar: {
      //       show: true
      //     }
      //   },
      //   plotOptions: {
      //     radialBar: {
      //       startAngle: -135,
      //       endAngle: 225,
      //       hollow: {
      //         margin: 0,
      //         size: "70%",
      //         background: "#fff",
      //         image: undefined,
      //         position: "front",
      //         dropShadow: {
      //           enabled: true,
      //           top: 3,
      //           left: 0,
      //           blur: 4,
      //           opacity: 0.24
      //         }
      //       },
      //       track: {
      //         background: "#fff",
      //         strokeWidth: "7%",
      //         margin: 0, // margin is in pixels
      //         dropShadow: {
      //           enabled: true,
      //           top: -3,
      //           left: 0,
      //           blur: 4,
      //           opacity: 0.35
      //         }
      //       },

      //       dataLabels: {
      //         show: true,
      //         name: {
      //           offsetY: -10,
      //           show: false,
      //           color: "#888",
      //           fontSize: "17px"
      //         },
      //         value: {
      //           formatter: function(val: { toString: () => string; }) {
      //             return parseInt(val.toString(), 10).toString() + '%';
      //           },
      //           color: "#111",
      //           fontSize: "36px",
      //           show: true
      //         }
      //       }
      //     }
      //   },
      //   fill: {
      //     show: false,
      //     type: "gradient",
      //     gradient: {
      //       shade: "dark",
      //       type: "horizontal",
      //       shadeIntensity: 0.5,
      //       gradientToColors: ["#ABE5A1"],
      //       inverseColors: true,
      //       opacityFrom: 1,
      //       opacityTo: 1,
      //       stops: [0, 100]
      //     }
      //   },
      //   stroke: {
      //     lineCap: "round"
      //   },
      //   labels: ["Percent"]
      // };

      this.pourcentage()
    })

    this.homeService.getActionDuMois("revenu").subscribe(res =>{
      this.revenuMois = res.data

      this.pourcentage()
    })






  }

  getMontantMois(){
    this.homeService.getMontantMois().subscribe( res=> {
    })
  }

  actionMois(action: string){
    this.homeService.getActionDuMois(action)
  }

  pourcentage(){
    console.log("Revenu: ", this.revenuMois)
    console.log("Depense: ", this.depenseMois)

    this.pourcentDepense = (this.depenseMois/this.revenuMois)*100
    this.pourcentRevenu = 100 - (this.depenseMois/this.revenuMois)*100

    this.chartRevenu = {
      series: [this.pourcentRevenu],
      chart: {
        height: 200,
        type: "radialBar",
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "7%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: false,
              color: "#888",
              fontSize: "17px"
            },
            value: {
              formatter: function(val: { toString: () => string; }) {
                return parseInt(val.toString(), 10).toString() + '%';
              },
              color: "#111",
              fontSize: "36px",
              show: true
            }
          }
        }
      },
      fill: {
        show: false,
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Percent"]
    };

    this.chartDepense = {
      series: [this.pourcentDepense],
      chart: {
        height: 200,
        type: "radialBar",
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "7%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: false,
              color: "#888",
              fontSize: "17px"
            },
            value: {
              formatter: function(val: { toString: () => string; }) {
                return parseInt(val.toString(), 10).toString() + '%';
              },
              color: "#111",
              fontSize: "36px",
              show: true
            }
          }
        }
      },
      fill: {
        show: false,
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Percent"]
    };
  }





}

