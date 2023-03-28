import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    this.RenderChart();
  }

  RenderChart(){

    new Chart("piechart", {
      type: 'polarArea',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 5,
          backgroundColor: ["red", "blue", "yellow", "green", "purple", "orange"]
        }]
      }
    });

  }




}
