import { Component, Input, OnInit } from '@angular/core';
import { StatusUsersService } from '../../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  @Input() user: {id: number, userName: string} | undefined;
  constructor(private usersService: StatusUsersService) { }

  ngOnInit(): void {
  }

  onDeactiveUser(id: any) {
      this.usersService.onDeactiveUser(id);
  }
}
