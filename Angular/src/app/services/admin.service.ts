import { Injectable } from '@angular/core';
import { SubscribersInterface } from '../modules/admin/Interfaces/SubscribersInterface';
import { IndividualInterface } from '../modules/admin/Interfaces/BroadbandInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getAllSubscribers(): Observable<SubscribersInterface[]> {
    return this.httpClient.get<SubscribersInterface[]>(`${this.apiUrl}/subscribers`);
  }

  getAllIndividualSubscriptions(): Observable<IndividualInterface[]> {
    return this.httpClient.get<IndividualInterface[]>(`${this.apiUrl}/individualSubscriptions`);
  }

  getAllBusinessSubscriptions(): Observable<IndividualInterface[]> {
    return this.httpClient.get<IndividualInterface[]>(`${this.apiUrl}/businessSubscriptions`);
  }
}
