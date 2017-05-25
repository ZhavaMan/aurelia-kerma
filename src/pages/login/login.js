import { inject } from 'aurelia-framework';
import AuthService from '../../AuthService';

@inject(AuthService)
export class Login {

  constructor(AuthService) {
    // Or, if we want to add additional logic to the function,
    // we can call it within another method on our view model.
    this.login = () => {
      if (this.username && this.password) {
        console.log('asndjansdjasnd, login.js', this.password);
        AuthService.login(this.username, this.password);
      } else {
        this.error = 'Please enter a username and password.';
        console.log(this.error);
      }
    };
  }

  activate() {
    this.username = '';
    this.password = '';
    this.error = '';
  }
}
