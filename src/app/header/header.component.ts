import { Component } from '@angular/core';
import { NavMenu } from './nav.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logo:string = 'Shop.';

  isExpanded$: boolean = false;
  
  navigation: NavMenu[] = [
    {
      path:'/main',
      name:'Home'
    },
    {
      path:'/products',
      name:'Products'
    },
    {
      path:'/registration',
      name:'Registration'
    }
  ]

  open() {
    this.isExpanded$ = !this.isExpanded$;
  }

  logOut() {
    localStorage.removeItem('TOKEN');
  }
}
