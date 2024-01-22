import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { ViewdetailedbroadbandService } from '../../../services/viewdetailedbroadband.service';
import { MatTableDataSource, } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface BroadbandPlans {
  id:number;
  planType: string;
  planName: string;
  speed: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-viewdetailedbroadband',
  templateUrl: './viewdetailedbroadband.component.html',
  styleUrl: './viewdetailedbroadband.component.scss',
})

export class ViewdetailedbroadbandComponent implements AfterViewInit {
  @ViewChild(MatSort) sort = {} as MatSort;
  @ViewChild(MatPaginator) paginator = {} as MatPaginator;

  constructor(private planService: ViewdetailedbroadbandService) { }

  displayedColumns: string[] = ['id','planType','planName', 'speed', 'description', 'price'];
  dataSource = new MatTableDataSource(this.planService.getAllPlans());

  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
}
