import {Component, OnInit} from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import {observable, Observable} from "rxjs";
import {Column} from "../../models/column.model";
import {ColumnComponent} from "../column/column.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {TableModule} from "primeng/table";
import {Button} from "primeng/button";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
    imports: [
        ColumnComponent,
        AsyncPipe,
        NgForOf,
        TableModule,
        Button,
    ],
  standalone: true
})
export class BoardComponent implements OnInit{

  columns$: Observable<Column[]> | undefined;

  ngOnInit(): void {
    this.getColumns();
  }

  getColumns() {
    this.columns$ = this.toDoService.getColumns();
  }

  constructor(private toDoService: ToDoService) {}

  addColumn(): void {
    const title = prompt('Enter column title:');
    if (title) this.toDoService.addColumn(title);
  }


}
