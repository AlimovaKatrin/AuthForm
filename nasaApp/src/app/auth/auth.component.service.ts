import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogin$ = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get('http://localhost:3000/auth')
  }

  switchAuth() {
    this.isLogin$.next(true)
  }
}

