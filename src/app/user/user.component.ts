import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AuthGuardService } from '../service/guard/auth-guard.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  providers : [AuthService,AuthGuardService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private router :Router ,private routes : ActivatedRoute){};
  onCategoriesClick(){
    // navigate to category
    this.router.navigateByUrl("/category")
  };
  onCategories(){
    this.router.navigate(['category'])
  };
  user:{ id: string; name: string; } | undefined;
  ngOnInit():void{
    this.user = {
      id:this.routes.snapshot.params['id'],
      name : this.routes.snapshot.params['name']
    };
    this.routes.params.subscribe((data:Params)=>{
      this.user = {
        id: data['id'],
        name : data['name'],
      };
    });
    console.log(this.routes.snapshot.queryParams);
    console.log(this.routes.snapshot.fragment);
  };
  getUserDetails(){
    this.router.navigate(['/users',1,'user1'],{
      queryParams:{page :1 , search : 'user1'},
      fragment : 'loading'
    })

    console.log(this.routes.snapshot.queryParams);
    console.log(this.routes.snapshot.fragment);

    this.routes.queryParams.subscribe(data=>{
      console.log(data);
    })
  }
  onUserEdit(){
    this.router.navigate(['/users',this.user?.id, this.user?.name, 'edit'],
   { queryParams:{page :1 , search : 'user1'},
      fragment : 'loading',
    queryParamsHandling : 'preserve'}
    )
  }
}
