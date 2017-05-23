import {HttpClient} from '../../aurelia-http-client';

let httpClient = new HttpClient();

export class Info {
  constructor() {
    this.getData();
  }

  getData() {
    httpClient.get('http://demo6292426.mockable.io/professionales-blick')
    .then(data => {
      this.questions = JSON.parse(data.response);
    });
  }
}
