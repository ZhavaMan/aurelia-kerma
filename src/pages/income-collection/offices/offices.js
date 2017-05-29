import {HttpClient} from '../../../aurelia-http-client';

let httpClient = new HttpClient();

export class Offices {
  constructor() {
    this.getData();
  }

  getData() {
    httpClient.get('http://demo2717921.mockable.io/IngresosCobranzaMock-blick')
    .then(data => {
      this.questions = JSON.parse(data.response);
    });
  }
}