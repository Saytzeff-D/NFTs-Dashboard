import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chartData = [
    {
    data: [450, 200, 100, 230, 500, 100, 400, 220, 500],
    label: 'Sales',
    barThickness: 17,
    borderRadius: 5,
    backgroundColor: 'blue'
    },
    // {
    // data: [120, 455, 100, 340],
    // label: 'Account B'
    // },
    // {
    // data: [45, 67, 800, 500],
    // label: 'Account C'
    // }
  ]
  public chartLabels = [    
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct'    
  ]
  public chartOptions = {
    responsive: true,    
  }

  ngOnInit(): void {
      
  }
}
