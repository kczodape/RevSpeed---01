import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../../services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmupdatedialogComponent } from './confirmupdatedialog/confirmupdatedialog.component';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrl: './subscribers.component.scss',
})
export class SubscribersComponent implements AfterViewInit {
  @ViewChild(MatSort) sort = {} as MatSort;
  @ViewChild(MatPaginator) paginator = {} as MatPaginator;

  constructor(private adminService: AdminService, public dialog: MatDialog) {}

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phoneNumber',
    'address',
    'role',
    'actions',
  ];
  dataSource = new MatTableDataSource(this.adminService.getAllSubscribers());

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // updateRole(element: Subscriber): void {
  //   // Handle the role update logic here
  //   console.log(`Update role for ${element.name} to ${element.role}`);
  //   // Call your service to update the role
  // }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(ConfirmupdatedialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  applyFilter(event: Event) {
    // applies filtering to all columns ('position', 'name', 'weight', 'symbol')
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
