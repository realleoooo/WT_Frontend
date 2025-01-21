import {Component, OnInit} from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import {Observable} from "rxjs";
import {Column} from "../../models/column.model";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{

  columns$: Observable<Column[]> | undefined;

  ngOnInit(): void {
    this.columns$ = this.toDoService.getColumns();
  }

  constructor(private toDoService: ToDoService) {}

  addColumn(): void {
    const title = prompt('Enter column title:');
    if (title) this.toDoService.addColumn(title);
  }


}
