import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskComponent } from './pages/task/task.component';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [


  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    RouterModule,
    TaskComponent,
    AppComponent,
    SignUpComponent
  ],
  providers: []
})
export class AppModule { }
