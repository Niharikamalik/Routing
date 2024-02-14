import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';
import { EdituserComponent } from './edituser/edituser.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './service/guard/auth-guard.service';
import { AuthService } from './service/auth.service';

export const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {
  path:'users',
  component:UsersComponent ,
  canLoad:[AuthGuardService],
  children :[{path:':id/:name',component:UserComponent},
            {path:':id/:name/edit' , component : EdituserComponent}],
  },
  {path:'category',component:CategoryComponent},
  {path : '**' , component : NotFoundComponent},
];
