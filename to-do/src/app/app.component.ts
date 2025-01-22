import {Component} from '@angular/core';
import {BoardComponent} from "./components/board/board.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    BoardComponent, CommonModule,
  ]
})
export class AppComponent {
  title = 'to-do';
}
