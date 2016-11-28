import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CarehomesService {
  constructor(private http: Http) { }

  get() {
    return this.http.get('static/CQC_Reprt_Coord.json')
      .map(response => response.json());
  }
}
