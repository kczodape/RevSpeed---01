import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { BehaviorSubject, Observable, catchError } from 'rxjs';

const BASE_URL = ["http://localhost:8080/"]

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private emailExistsErrorSubject = new BehaviorSubject<boolean>(false);
  emailExistsError$ = this.emailExistsErrorSubject.asObservable();

  constructor(private http: HttpClient) { }

  register(signRequest:any):Observable<any>{
    return this.http.post(BASE_URL+'signup', signRequest).pipe(
      catchError((error) => {
        if (error.status === 400 && error.error) {
          this.emailExistsErrorSubject.next(true);
        }
        throw error;
      })
    )
  }

  resetEmailExistsError(){
    this.emailExistsErrorSubject.next(false);
  }

  login(loginRequest: any):Observable<any>{
    return this.http.post(BASE_URL+'login',loginRequest)
  }
  hello(): Observable<any> {
    return this.http.get(BASE_URL + 'api/hello', {
      headers: this.createAuhtorizationHeader() || {}
    })
  }

  myDetails(): Observable<any>{
    return this.http.get(BASE_URL + 'api/mydetails', {
      headers: this.createAuhtorizationHeader() || {}
    })
  }
  

  private createAuhtorizationHeader() {
    const jwtToken = sessionStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in session storage", jwtToken);
      return new HttpHeaders().set(
        "Authorization", "Bearer " + jwtToken
      )
    } else {
      console.log("JWT token not found in session storage");
    }
    return null;
  }
}
