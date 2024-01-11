import { Component } from '@angular/core';

@Component({
  selector: 'app-viewdetailedbroadband',
  templateUrl: './viewdetailedbroadband.component.html',
  styleUrl: './viewdetailedbroadband.component.scss',
})
export class ViewdetailedbroadbandComponent {
  // broadbandServicePlans: string[][] = [
  //   ['Monthly Basic Plan / 28 days / 20 MBPS', '300'],
  //   ['Monthly Standard Plan / 28 days / 25 MBPS', '350'],
  //   ['Monthly Entertainment Plan / 28 days / 40 MBPS', '450'],
  //   ['Quaterly Basic Plan / 84 days / 22 MBPS', '800'],
  //   ['Quaterly Standard Plan / 84 days / 27 MBPS', '900'],
  //   ['Quaterly Entertainment Plan / 84 days / 42 MBPS', '1000'],
  //   ['Yearly Basic Plan / 360 days / 27 MBPS', '3000'],
  //   ['Yearly Standard Plan / 360 days / 32 MBPS', '3500'],
  //   ['Yearly Entertainment Plan / 360 days / 50 MBPS', '4500'],
  // ];

  broadbandServicePlans: any[][];
  // Replace any[] with the actual type of your plan
  constructor() {
    this.broadbandServicePlans = [
      [1, 1, 'Monthly Basic Plan / 28 dasy / 20 MBPS', 300.0],
      [2, 1, 'Monthly Standard Plan / 28 days / 25 MBPS', 350.0],
      [3, 1, 'a', 25],
      [4, 2, 'Quarterly Basic Plan / 28 dasy / 20 MBPS', 300.0],
      [5, 2, 'Quarterly Standard Plan / 28 days / 25 MBPS', 350.0],
      [6, 2, 'Quarterly', 25],
      [7, 3, 'Yearly Basic Plan / 28 dasy / 20 MBPS', 300.0],
      [8, 3, 'Yearly Standard Plan / 28 days / 25 MBPS', 350.0],
      [9, 3, 'Yearly', 25],    ];
  }
  getTabLabel(index: number): string {
    if (index === 0) {
      return 'Monthly';
    } else if (index === 1) {
      return 'Quarterly';
    } else if (index === 2) {
      return 'Yearly-Plans';
    }
    return '';
  }
}
