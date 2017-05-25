import { inject } from 'aurelia-framework';
import AuthService from 'AuthService';

@inject(AuthService)
export class App {
  constructor(AuthService) {
    this.auth = AuthService;
  }

  configureRouter(config, router) {
    config.title = 'Kerma Partners';

    config.map([
      { route: ['/', '/resumen'],
        name: 'summary',
        moduleId: './pages/summary/summary',
        nav: true,
        title: 'Resumen'
      },
      { route: '/informacion-general',
        name: 'info',
        moduleId: './pages/info/info',
        nav: true,
        title: 'Información general'
      },
      { route: '/ingresos',
        name: 'income',
        moduleId: './pages/income-collection_income/income',
        nav: true,
        title: 'Ingresos - Ingresos Cobranza'
      }
    ]);

    this.router = router;
  }
}

export class ToJSONValueConverter {
  toView(obj) {
    if (obj) {
      return JSON.stringify(obj, null, 2);
    }
  }
}
