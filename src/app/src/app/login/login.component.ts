import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  login = () => {
    const user = {
      username: this.username,
      password: this.password
    }

    this.router.navigate(['dashboard'])

  }

  ngOnInit() {
  }

}
