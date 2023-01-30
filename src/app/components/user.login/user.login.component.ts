import { Component } from '@angular/core';
import{faLock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user.login',
  templateUrl: './user.login.component.html',
  styleUrls: ['./user.login.component.scss']
})
export class UserLoginComponent {
  faLock = faLock;
  constructor(){}
ngOnInit(): void{}
}
