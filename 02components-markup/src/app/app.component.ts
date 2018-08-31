import { Component } from '@angular/core';
import data from './data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  articles = data;
  currentArticle = data[0];

  selectArticle(article){
    this.currentArticle = article;
  }
}
