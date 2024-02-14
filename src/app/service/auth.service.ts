export class AuthService
{
  hasAccess() {
    throw new Error("Method not implemented.");
  }
  isLoggedIn = false;
  login(){
    this.isLoggedIn= true;
  }
  logout(){
    this.isLoggedIn = false;
  }
  isAuthenticated(){
    return this.isLoggedIn;
  }
}
