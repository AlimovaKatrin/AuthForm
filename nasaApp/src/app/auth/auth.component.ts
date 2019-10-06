import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.component.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  userName = new FormControl('');
  password = new FormControl('');

  public currentUser: object;

  constructor(public http: AuthService,public router:Router) { }

  ngOnInit() {

  }

  login() {
    this.http.getUsers().subscribe(
      (arg: []) => {
        arg.forEach((element:any) => {
          if (element.name === this.userName.value && element.password === this.password.value) {
            this.http.isLogin = true;
            console.log(this.http.isLogin)
            // this.router.navigate(['main']);
          }

        })
      },
      err => console.log(err));
  }
}
