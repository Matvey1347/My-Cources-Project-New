import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Matvey';
  surname = 'Kapralov'
  onNullifyName() {
    this.name = '';
  }
}
