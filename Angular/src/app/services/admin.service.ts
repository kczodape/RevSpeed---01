import { Injectable } from '@angular/core';
import { Article } from '../modules/admin/subscribers/subscribers.component';

const All_ARTICLES: Article[] = [
  { id: 1, name: 'Krunal Zodape', email: 'krunal@gmail.com', phoneNumber: 8530278729, address: 'Khapa', role:'Admin' },
  { id: 2, name: 'Aakash Solanke', email: 'aakash@gmail.com', phoneNumber: 8530278729, address: 'Khapa', role:'User' },
  { id: 3, name: 'Abhishek Chaure', email: 'abhishek@gmail.com', phoneNumber: 8530278729, address: 'Khapa', role:'User' },
  { id: 4, name: 'Raaghul', email: 'raaghul@gmail.com', phoneNumber: 8530278729, address: 'Khapa', role:'User' },
  { id: 5, name: 'Janani', email: 'janani@gmail.com', phoneNumber: 8530278729, address: 'Khapa', role:'User' },
  { id: 6, name: 'Sneha', email: 'sneha@gmail.com', phoneNumber: 8530278729, address: 'Khapa', role:'User' },
  { id: 7, name: 'Bazeer', email: 'bazeer@gmail.com', phoneNumber: 8530278729, address: 'Khapa', role:'User' },
  { id: 8, name: 'Madhan', email: 'madhan@gmail.com', phoneNumber: 8530278729, address: 'Khapa', role:'User' },
];
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getAllArticles() {
    return All_ARTICLES;
}
}
