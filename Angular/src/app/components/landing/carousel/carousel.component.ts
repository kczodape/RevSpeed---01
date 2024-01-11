import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images = [
    {name:'istockphoto.jpg', caption:'hi1'},
    {name:'istockphoto-1.jpg', caption:'hi2'},
    {name:'istockphoto-13.jpg', caption:'hi3'}
  ];
}
