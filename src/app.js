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
        moduleId: './pages/income-collection/income/income',
        nav: true,
        title: 'Ingresos - Ingresos Cobranza'
      },
      { route: '/cobranza',
        name: 'collection',
        moduleId: './pages/income-collection/collection/collection',
        nav: true,
        title: 'Cobranza - Ingresos Cobranza'
      },
      { route: '/oficinas',
        name: 'offices',
        moduleId: './pages/income-collection/offices/offices',
        nav: true,
        title: 'Oficinas - Ingresos Cobranza'
      },
      { route: '/socios',
        name: 'partners',
        moduleId: './pages/professionals/partners/partners',
        nav: true,
        title: 'Socios - Professionales'
      },
      { route: '/abogados-tarifa',
        name: 'tariff-lawyers',
        moduleId: './pages/professionals/tariff-lawyers/tariff-lawyers',
        nav: true,
        title: 'Abogados Tarifa - Profesionales'
      },
      { route: '/abogados-años-de-experiencia',
        name: 'experienceyears-lawyers',
        moduleId: './pages/professionals/experienceyears-lawyers/experienceyears-lawyers',
        nav: true,
        title: 'Abogados años de experiencia - Profesionales'
      },
      { route: '/profesionales-no-abogados',
        name: 'professionals-nolawyers',
        moduleId: './pages/professionals/professionals-nolawyers/professionals-nolawyers',
        nav: true,
        title: 'Profesionales No Abogados - Professionales'
      },
      { route: '/pasantes',
        name: 'interns',
        moduleId: './pages/professionals/interns/interns',
        nav: true,
        title: 'Pasantes - Profesionales'
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
