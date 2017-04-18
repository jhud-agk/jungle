import { Component } from '@angular/core';
import { user } from './shared/models/user';


@Component({
  selector: 'my-app',
  template: `
  	<header>
  		<nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" [routerLink]="['/home']">JHUDS PLAYLIST</a>
          </div>
          <ul class="nav navbar-nav">
            <li><a href="#"></a></li>
            <li><a [routerLink]="['/albums']">Albums</a></li>
            <li><a href="#">Artists</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a [routerLink]="['/login']"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        </div>
      </nav>
  	</header>
    <div>
      <router-outlet></router-outlet>
    </div>
    
    

  `,
  styles: [`
    

  `]
})
export class AppComponent {
	
}
