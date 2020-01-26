import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor(private authService: AuthService) {
    this.user = this.authService.authState$.subscribe(user => this.user = user);
  }

  user
  email

  getEmail(){
    if(this.user){
      this.email = this.user.email;
    }else{
      this.email = ''
    }
  }

  ngOnInit() {

  }

  ngAfterContentChecked(){
    this.getEmail();
  }

  onLogout() {
    this.authService.logout();
  }

}
