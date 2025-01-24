import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TaskComponent } from './pages/task/task.component';
import { SignUpComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    { path: 'home', component: TaskComponent }, 
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: '', component: LoginComponent }
  ]; 