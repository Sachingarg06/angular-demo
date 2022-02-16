import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  array: any = []

  constructor(private shared: SharedService) { }

  ngOnInit(): void {

    this.array = this.shared.dataArray;
    console.log(this.array);
  }
  onclick() {
    console.log(this.array)
  }

}
