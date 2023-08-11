import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool-table',
  templateUrl: './pool-table.component.html',
  styleUrls: ['./pool-table.component.css']
})
export class PoolTableComponent implements OnInit {
  public arr = [1,2,3,4,5,6]

  ngOnInit(): void {
      
  }

}
