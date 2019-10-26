import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.component.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(public http: AuthService) { }

  ngOnInit() {
  }

}
