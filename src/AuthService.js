import { Aurelia, inject } from 'aurelia-framework';
import config from 'config';

@inject(Aurelia)
export default class AuthService {

  session = null

  // As soon as the AuthService is created, we query local storage to
  // see if the login information has been stored. If so, we immediately
  // load it into the session object on the AuthService.
  constructor(Aurelia) {
    this.app = Aurelia;
    this.session = JSON.parse(localStorage[config.tokenName] || null);
    console.log(this.session);
  }

  login(username, password) {
    if (username && password) {
      // Save to localStorage
      localStorage[config.tokenName] = JSON.stringify(config);

      // .. and to the session object
      //this.session = session;
      // .. and set root to app.
      this.app.setRoot('app');
    }
  }

  logout() {
    // Clear from localStorage
    localStorage[config.tokenName] = null;

    // .. and from the session object
    this.session = null;

    // .. and set root to login.
    this.app.setRoot('./pages/login/login');
  }

  isAuthenticated() {
    return this.session !== null;
  }

  can(permission) {
    return true; // why not?
  }
}
