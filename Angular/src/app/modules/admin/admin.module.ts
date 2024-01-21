import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BroadbanComponent } from './broadban/broadban.component';
import { DthComponent } from './dth/dth.component';
import { OttComponent } from './ott/ott.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { ReveneugraphComponent } from './dashboard/reveneugraph/reveneugraph.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { TotalsubscribercardComponent } from './dashboard/totalsubscribercard/totalsubscribercard.component';
import { TotalreveneucardComponent } from './dashboard/totalreveneucard/totalreveneucard.component';
import { BroadbandpiechartComponent } from './dashboard/broadbandpiechart/broadbandpiechart.component';
import { DthpiechartComponent } from './dashboard/dthpiechart/dthpiechart.component';
import {MatDialogModule} from '@angular/material/dialog';


import { ActiveinactiveusergraphComponent } from './dashboard/activeinactiveusergraph/activeinactiveusergraph.component';
import { MatTableModule } from '@angular/material/table'; 
import { MatSortModule } from '@angular/material/sort'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { ConfirmupdatedialogComponent } from './subscribers/confirmupdatedialog/confirmupdatedialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    BroadbanComponent,
    DthComponent,
    OttComponent,
    SubscribersComponent,
    ReveneugraphComponent,
    TotalsubscribercardComponent,
    TotalreveneucardComponent,
    BroadbandpiechartComponent,
    DthpiechartComponent,
    ActiveinactiveusergraphComponent,
    ConfirmupdatedialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    AgChartsAngularModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class AdminModule { }
