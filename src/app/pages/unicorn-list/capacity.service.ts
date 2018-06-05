import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Unicorn} from './unicorn.model';
import {HttpClient} from '@angular/common/http';
import {Capacity} from './capacity.model';

@Injectable({
  providedIn: 'root'
})
export class CapacityService {

    constructor(private http: HttpClient) {
    }

    private baseUrl = `http://localhost:3000/`;

    public get(id: number): Observable<Capacity> {
        return this.http.get<Capacity>(`${this.baseUrl}capacities/${id}`);
    }

    public getAll(): Observable<Capacity[]> {
        return this.http.get<Capacity[]>(`${this.baseUrl}capacities`);
    }
}
