import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { Revenu } from '../../models/revenu';
import { RevenusService } from '../../revenu.service';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
  ApexLegend
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  legend: ApexLegend | any;
  responsive: ApexResponsive[] | any;
  colors: string[] | any;
  labels: any;
};


@Component({
  selector: 'app-list-revenu',
  templateUrl: './list-revenu.component.html',
  styleUrls: ['./list-revenu.component.css']
})
export class ListRevenuComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  revenus$!: Observable<any[]>;
  revenuMois: any
  number!: any;
  cpt = 0;

  constructor(  private revenuService: RevenusService,
                private router: Router){}

  ngOnInit(): void {
    this.revenus$ = this.revenuService.getAllRevenu()

    this.revenuService.getDepenseDuMois().subscribe(re => {
      this.revenuMois = re.data
    })

    // this.chartOptions = {
    //   series: [ 20 , 55, 13, 43, 22, 23],
    //   chart: {
    //     width: 200,
    //     fontSize: "5px",
    //     type: "pie"
    //   },
    //   colors: ["049942", "#044999", "#048f99", "#3d0499", "#839904", "#997604" ],
    //   labels: ["Sante", "Education", "Nutrition", "Transport", "Maison","Autres"],
    //   legend: {
    //     show: false,
    //     fontSize: "5px",
    //   },
    //   responsive: [
    //     {
    //       breakpoint: 480,
    //       options: {
    //         chart: {
    //           width: 150
    //         },
    //         legend: {
    //           show: false,
    //           floating: true,
    //           position: "bottom"
    //         }
    //       }
    //     }
    //   ]
    // };

    this.chartOptions = {
      series: [ 20 , 55, 13, 10],
      chart: {
        width: 200,
        fontSize: "5px",
        type: "pie"
      },
      colors: ["044999", "#f89604", "#f80404", "#04aa99"],
      labels: ["Business", "Salaire", "Tontine", "Autres"],
      legend: {
        show: false,
        fontSize: "5px",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 150
            },
            legend: {
              show: false,
              floating: true,
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ajoutRevenu(): void{
    this.router.navigateByUrl('revenu/create')
  }


  afficheNbre(): void{
    const number$ = interval(1)
    this.number = document.getElementById("number")
      number$.subscribe(value => {
        if (value < 5000){
          this.number.innerHTML = ++this.cpt;
        }
      })
  }

  deleteRevenu(idAction: number){
    this.revenuService.deleteRevenu(idAction)
    .subscribe(() => {
      this.revenus$ = this.revenuService.getAllRevenu()

      this.revenuService.getDepenseDuMois().subscribe(re => {
        this.revenuMois = re.data
      })
    })
  }



}
