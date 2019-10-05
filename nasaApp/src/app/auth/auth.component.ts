import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.component.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public http: AuthService) { }

  ngOnInit() {
  //   this.http.bdtest()
  //     .subscribe(
  //       arg => console.log(arg),
  //       err => console.log(err));

  }

}
