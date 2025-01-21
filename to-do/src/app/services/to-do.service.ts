import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Column} from '../models/column.model';
import { HttpClient } from "@angular/common/http";
import {Activity} from "../models/activity.model";

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private readonly url = 'http://localhost:5114';

  constructor(private http: HttpClient) {
  }

  getColumns(): Observable<Column[]> {
    return this.http.get<Column[]>(`${this.url}/columns`);
  }

  addActivity(activity: Activity): Observable<Activity>{
    console.log(activity);
    return this.http.post<Activity>(`${this.url}/activities`, activity);
  }

  addColumn(title: string) {

  }
}
