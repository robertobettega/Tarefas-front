import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskComponent } from './pages/task/task.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    TaskComponent,
    AppComponent
  ],
  providers: []
})
export class AppModule { }
