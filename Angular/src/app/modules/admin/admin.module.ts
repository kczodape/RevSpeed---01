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
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    AgChartsAngularModule
  ]
})
export class AdminModule { }
