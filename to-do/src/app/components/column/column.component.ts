import {Component, Input, Output} from '@angular/core';
import {Column} from '../../models/column.model';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Activity} from "../../models/activity.model";
import {ActivityComponent} from "../activity/activity.component";
import {ButtonModule} from "primeng/button";
import {Card} from "primeng/card";
import {TableModule} from "primeng/table";
import {AddActivityModalComponent} from "./add-activity-modal/add-activity-modal.component";
import {ToDoService} from "../../services/to-do.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  imports: [
    ActivityComponent,
    ButtonModule,
    Card,
    TableModule,
    AddActivityModalComponent,
    NgForOf,
  ],
  standalone: true,
})
export class ColumnComponent {
  @Input() column!: Column;
  @Output() isModalOpen = false;

  constructor(private toDoService: ToDoService) {
  }

  addActivity(): void {
    this.isModalOpen = true;
  }

  onModalClosed(inputs: {title: string; description: string}) {
    this.isModalOpen = false;

    const newActivity: Activity = {
      title: inputs.title,
      description: inputs.description,
      columnTitle: this.column.title,
      category: ''
    };

    if (inputs) {
      this.toDoService.addActivity(newActivity).subscribe((addedActivity) => {
        this.column.activities.push(addedActivity);
      });
    }
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

  removeColumn() {

  }
}
