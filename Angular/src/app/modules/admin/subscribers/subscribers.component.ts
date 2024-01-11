import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../../services/admin.service';

export interface Article {
  id: number;
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  role: string;
} 

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrl: './subscribers.component.scss'
})

export class SubscribersComponent implements AfterViewInit {
  @ViewChild(MatSort) sort = {} as MatSort;
  @ViewChild(MatPaginator) paginator = {} as MatPaginator;

  constructor(private articleService: AdminService) { }

  displayedColumns: string[] = ['id', 'name', 'email', 'phoneNumber', 'address', 'role'];
  dataSource = new MatTableDataSource(this.articleService.getAllArticles());

  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
}
