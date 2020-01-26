import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) {
    this.user = this.authService.authState$.subscribe(user => this.user = user);
  }

  user
  loggedIn

  userLoggedIn(){
    if(this.user){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
    
  }

  ngOnInit(){

  }

  ngAfterViewInit() {
    this.userLoggedIn();
  }

  ngAfterContentChecked(){
    this.userLoggedIn();
  }

}
