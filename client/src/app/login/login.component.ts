import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './../messageInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {
  username: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  connect(){
    if(this.username.length != 0){
      User.name = '#' + this.username;
      this.router.navigateByUrl('/chats');
    }
  }

}
