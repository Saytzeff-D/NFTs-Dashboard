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
    borderColor: 'red',
    backgroundColor: '#1890FF'    
    }
  ]
  public lineChartData = [
    {
    data: [350, 50, 300, 220, 500, 280, 400, 220, 500],
    label: 'Sales',
    barThickness: 17,
    borderRadius: 5,
    // backgroundColor: 'green',
    // theme: 'red'
    },
    {
    data: [20, 90, 50, 150, 290, 290, 350, 230, 400],
    label: 'Traffic',
    barThickness: 17,
    borderRadius: 5,
    backgroundColor: 'blue',
    // theme: 'red'
    },   
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
    aspectRatio:2.5,    
  }

  ngOnInit(): void {
      
  }
}
