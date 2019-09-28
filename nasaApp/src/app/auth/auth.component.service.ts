import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
    constructor(private httpClient: HttpClient) { }

    bdtest(){
        return this.httpClient.get('http://localhost:3000/auth')
    }
}

