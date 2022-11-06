import { Component, Input, OnInit } from '@angular/core';
import { StatusUsersService } from '../../services/users.service';

@Component({
  selector: 'app-deactive-users',
  templateUrl: './deactive-users.component.html',
  styleUrls: ['./deactive-users.component.scss']
})
export class DeactiveUsersComponent implements OnInit {
  @Input() user: {id: number, userName: string} | undefined;
  constructor(private usersService: StatusUsersService) { }

  ngOnInit(): void {
  }

  
  onActiveUser(id: any) {
    this.usersService.onActiveUser(id);
  }
}
