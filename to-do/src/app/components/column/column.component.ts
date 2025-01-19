import {Component, Input} from '@angular/core';
import {Column} from '../../models/column.model';
import {ToDoService} from '../../services/to-do.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Activity} from "../../models/activity.model";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() column!: Column;

  constructor(private toDoService: ToDoService) {
  }

  addActivity(): void {
    const title = prompt('Enter activity title:');
    const description = prompt('Enter activity description:');
    const category = prompt('Enter activity category:');
    if (title) this.toDoService.addActivity(this.column.id, title, description!, category!);
  }

  removeColumn(): void {
    this.toDoService.removeColumn(this.column.id);
  }

  drop(event: CdkDragDrop<Activity[]>) {
    if (event.previousContainer === event.container) {
      // Innerhalb derselben Spalte verschieben
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Zwischen Spalten verschieben
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
