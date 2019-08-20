import {Component, OnInit} from '@angular/core';
import {User} from './User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public isVisible: boolean = false;
  john: User = new User(5, 'john', 'doe', 0, '...', 'https://randomuser.me/api/portraits/lego/2.jpg');

  constructor() {
  }

  ngOnInit() {
  }


}
