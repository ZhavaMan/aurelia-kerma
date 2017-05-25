import environment from './environment';
import AuthService from 'AuthService';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  //this line tells aurelia to start in login view
  aurelia.start().then(() => {
    var auth = aurelia.container.get(AuthService);
    let root = auth.isAuthenticated() ? 'app' : './pages/login/login';
    aurelia.setRoot(root);
  });
}
