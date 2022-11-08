import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeUsersCount = 0;
  inactiveUsersCount = 0;
  constructor() { }

  addActiveUser() {
    this.activeUsersCount++;
    console.log(this.activeUsersCount);
  }

  addDeactiveUser() {
    this.inactiveUsersCount++;
    console.log(this.inactiveUsersCount);
  }
}