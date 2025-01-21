import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BoardComponent} from './components/board/board.component';
import {ColumnComponent} from './components/column/column.component';
import {ActivityComponent} from './components/activity/activity.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

@NgModule({ declarations: [
        AppComponent,
        BoardComponent,
        ColumnComponent,
        ActivityComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        DragDropModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {
}
