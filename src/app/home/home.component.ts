import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Observable } from 'rxjs';
import { chartOptions } from 'src/app/home/data-chart';
import { RevenusService } from '../list-revenu/revenu.service';
import { Revenu } from '../new-revenu/revenu';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(){}

  ngOnInit(): void {
    this.RenderChart();

    


  }
  public chartOptions = chartOptions;

  RenderChart(){

    new Chart("piechart", {
      type: 'bar',
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

