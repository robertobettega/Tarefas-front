import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { TaskComponent } from './pages/task/task.component';

export const routes: Routes = [
    { path: 'home', component: TaskComponent }, 
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent }
  ];