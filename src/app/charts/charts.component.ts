import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';
import { ChartData, Chart } from './models/charts.interface';
import { ChartsService } from './charts.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  attendees: User[];
  dataSource: Chart;
  chartsData: ChartData[];
  width = 600;
  height = 400;
  type = 'column2d';
  dataFormat = 'json';

  constructor(private chartsService: ChartsService) {
    chartsService.getUsers().subscribe((response) => {
      this.attendees = response;
    });

    chartsService.getChartData().subscribe((response) => {
      this.dataSource = {
        chart: {
          xAxisName: 'Registration Type',
          yAxisName: 'Count',
        },

        data: response,
      };
    });
  }

  ngOnInit(): void {}
}
