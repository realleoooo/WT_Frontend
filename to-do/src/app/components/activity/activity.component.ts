import {Component, Input} from '@angular/core';
import {Activity} from '../../models/activity.model';
import {Card} from "primeng/card";
import {Button} from "primeng/button";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
  imports: [
    Card,
    Button
  ],
  standalone: true
})
export class ActivityComponent {
  @Input() activity!: Activity;
  @Input() columnTitle!: string;
}
