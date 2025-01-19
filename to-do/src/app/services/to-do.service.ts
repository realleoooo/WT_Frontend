import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Column} from '../models/column.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private columns: Column[] = [
    {id: '1', title: 'To Do', activities: []},
    {id: '2', title: 'In Progress', activities: []},
    {id: '3', title: 'Done', activities: []},
  ];

  private columnsSubject = new BehaviorSubject<Column[]>(this.columns);
  columns$ = this.columnsSubject.asObservable();

  addColumn(title: string): void {
    this.columns.push({id: Date.now().toString(), title, activities: []});
    this.columnsSubject.next(this.columns);
  }

  removeColumn(id: string): void {
    this.columns = this.columns.filter((col) => col.id !== id);
    this.columnsSubject.next(this.columns);
  }

  addActivity(columnId: string, title: string, description: string, category: string): void {
    const column = this.columns.find((col) => col.id === columnId);
    column?.activities.push({id: Date.now().toString(),title: title, description: description, category: category});
    this.columnsSubject.next(this.columns);
  }
}
