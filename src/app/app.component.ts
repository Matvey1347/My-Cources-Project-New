import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Matvey';
  surname = 'Kapralov'
  onShowPassword = false;
  count = 0;
  buttonClicks: number[] = [];

  onNullifyName() {
    this.name = '';
  }

  onClickButton() {
    this.onShowPassword = !this.onShowPassword;
    this.count++;
    this.buttonClicks.push(this.count);
  }
}
