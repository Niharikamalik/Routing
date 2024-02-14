import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/guard/auth-guard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    UserComponent,
    CategoryComponent,
    EdituserComponent,
    UsersComponent,
    RouterLink,
    RouterLinkActive,],
    providers : [AuthService,AuthGuardService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularRouting';
  constructor(private authService : AuthService,private authGuard : AuthGuardService){};
  onLoginClick(){
    this.authService.login();
  };
  onLogoutClick(){
    this.authService.logout();
  };
};
