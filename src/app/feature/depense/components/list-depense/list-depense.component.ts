import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Depense } from '../../models/depense';
import { DepensesService } from '../../depense.service';

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
  selector: 'app-list-depense',
  templateUrl: './list-depense.component.html',
  styleUrls: ['./list-depense.component.css']
})
export class ListDepenseComponent implements OnInit{
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  depenses: any = []
  depenses$!: Observable<any[]>;
  depenseMois!: number


  constructor(  private depensesService: DepensesService,
                private router: Router){


                }

  ngOnInit(): void {

      // this.depenses$ =
      this.depensesService.getAllDepense().subscribe(res => {
        console.log(res);
        this.depenses = res.data
        console.log("La liste: ", this.depenses)

      });
      this.depensesService.getDepenseDuMois().subscribe(res => {
        this.depenseMois = res.data
      })

      this.chartOptions = {
        series: [ 20 , 55, 13, 43, 22, 23],
        chart: {
          width: 200,
          fontSize: "5px",
          type: "pie"
        },
        colors: ["049942", "#044999", "#048f99", "#3d0499", "#839904", "#997604" ],
        labels: ["Sante", "Education", "Nutrition", "Transport", "Maison","Autres"],
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

  ajoutDepense(): void{
    this.router.navigateByUrl('depense/create');
  };

  deleteDepense(idAction: number){
    this.depensesService.deleteDepense(idAction)
    .subscribe(() => {
      this.depensesService.getAllDepense().subscribe(res => {
        this.depenses = res.data
      })

      this.depensesService.getDepenseDuMois().subscribe(re => {
        this.depenseMois = re.data
      })
    })


  }







}
