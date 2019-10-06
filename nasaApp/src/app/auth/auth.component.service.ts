import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
public isLogin = false;

    constructor(private httpClient: HttpClient) { }

    getUsers(){
        return this.httpClient.get('http://localhost:3000/auth')
    }

    isAuthenticated(){
      return this.isLogin
    }
}

