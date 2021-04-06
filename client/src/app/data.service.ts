import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'http://localhost:3000/api/items';
  constructor(private http: HttpClient) {}

  getShoppingItems() {
    return this.http.get(this.url).pipe(map((res) => res));
  }

  addShoppingItems(newItem: any) {
    let headers = new HttpHeaders();
    headers.append('content-Type', 'application/json');
    return this.http
      .post('http://localhost:3000/api/item', newItem, { headers: headers })
      .pipe(map((res) => res));
  }

  deleteShoppingItem(id: any) {
    return this.http
      .delete('http://localhost:3000/api/item/' + id)
      .pipe(map((res) => res));
  }
}
