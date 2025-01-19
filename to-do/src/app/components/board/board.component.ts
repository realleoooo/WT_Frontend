import { Component } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  columns$ = this.toDoService.columns$;

  constructor(private toDoService: ToDoService) {}

  addColumn(): void {
    const title = prompt('Enter column title:');
    if (title) this.toDoService.addColumn(title);
  }
}
