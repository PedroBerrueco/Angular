import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  myMovies: any;
  moviesService: MoviesService;

  constructor(moviesService: MoviesService) {
    this.moviesService = moviesService;
   }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data: { results: any; }) => {
      this.myMovies = data.results;
    })
  }

}
