import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popular : any;
  theaters : any;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getPopular().subscribe(
      data => {
        this.popular = data;
      }
    )
    this.movieService.getTheaters().subscribe(
      data => {
        this.theaters = data;
      }
    )
  }

}
