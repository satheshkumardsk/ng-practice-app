import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

//https://gorest.co.in/public/v1/users?page=1&per_page=10

  constructor(private http: HttpClient) { }

  getUsers(page: number, per_page: number) {
    return this.http.get(`https://gorest.co.in/public/v1/users?page=${page}&per_page=${per_page}`);
  }

}
