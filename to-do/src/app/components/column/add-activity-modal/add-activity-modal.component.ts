import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputText } from 'primeng/inputtext';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Activity } from '../../../models/activity.model';

@Component({
  selector: 'app-add-activity-modal',
  imports: [
    Button,
    Dialog,
    InputText,
    NgIf,
    FormsModule,
  ],
  templateUrl: './add-activity-modal.component.html',
  styleUrls: ['./add-activity-modal.component.scss'],
  standalone: true,
})
export class AddActivityModalComponent {
  @Input() header!: string;
  @Input() titleLabel!: string;
  @Input() isModalOpen = false;
  @Output() modalClosed = new EventEmitter<any>();

  titleInput: string = '';
  description: string = '';

  onSave(): void {
    if (this.titleInput && this.description) {
      const newActivity: Activity = {
        title: this.titleInput,
        description: this.description,
        columnTitle: '', // Hier den entsprechenden Wert setzen
        category: '',    // Hier den entsprechenden Wert setzen
      };
      this.modalClosed.emit(newActivity);
      this.resetForm();
    }
  }

  onCancel(): void {
    this.modalClosed.emit(null);
    this.resetForm();
  }

  resetForm(): void {
    this.titleInput = '';
    this.description = '';
  }
}
