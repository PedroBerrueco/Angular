import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApixComponent } from './apix/apix.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'apix', component: ApixComponent},
  {path: 'movies', component: MoviesComponent}
] 

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
