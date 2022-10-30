import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class StatusUsersService {
  activeUsers = ['Matvey', 'Dima', 'Kirill'];
  deactiveUsers = ['Oleg', 'Bogdan', 'Sasha'];
  constructor(private counterService: CounterService) { }

  onActiveUser(id: number) {
    this.activeUsers.push(this.deactiveUsers[id]);
    this.deactiveUsers.splice(id, 1);
    this.counterService.addActiveUser();
  }

  onDeactiveUser(id: number) {
    this.deactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.addDeactiveUser();
  }
}
