export class App {
  constructor() {

   }

  configureRouter(config, router){
    config.title = 'Kerma Partners';

    config.map([
      { route: ['','home'],  name: 'resumen',
        moduleId: './components/home/home',  nav: true, title: 'Resumen' },
      { route: 'about',  name: 'about',
        moduleId: './components/about/about', nav: true, title: 'About' },
      { route: 'login',  name: 'login',
        moduleId: './components/login/login', nav: true, title: 'Login' }
    ]);

    this.router = router;
  }
}