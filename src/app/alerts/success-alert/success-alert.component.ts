import { Component, OnInit, Input } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {
  private _success = new Subject<string>();


  @Input() successMessage: string;
  
  staticAlertClosed = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 5000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  public changeSuccessMessage() {
    this._success.next(`${new Date()} - Message successfully changed.`);
  }

  public showSuccessMessage(){
    setTimeout(() => this.staticAlertClosed = true, 5000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

}
