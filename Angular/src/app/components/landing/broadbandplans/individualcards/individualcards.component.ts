import { Component } from '@angular/core';

@Component({
  selector: 'app-individualcards',
  templateUrl: './individualcards.component.html',
  styleUrl: './individualcards.component.scss'
})
export class IndividualcardsComponent {
  cards = [
    { title: 'Entertainment', speed: 'Upto 90 Mbps', subtitle: 'Speed', benefits: 'Includes RevSpeed benefits', rentalTitle: 'Monthly rental', rentalSubtitle: 'Rs 99', image:"Entertainment.jpg" },
    { title: 'Special Plan', speed: 'Upto 150 Mbps', subtitle: 'Speed', benefits: 'Includes RevSpeed benefits', rentalTitle: 'Quarterly rental', rentalSubtitle: 'Rs 300', image:"Entertainment-1.jpg" },
    { title: 'Basic Plan', speed: 'Upto 340 Mbps', subtitle: 'Speed', benefits: 'Includes RevSpeed benefits', rentalTitle: 'Annualy rental', rentalSubtitle: 'Rs 1000', image:"Broadband.jpg" }
  ];
}
