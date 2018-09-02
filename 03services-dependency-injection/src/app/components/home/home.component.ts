import {Component, OnInit} from '@angular/core'
import {HomeData} from './home.data'
import {GithubProfileInfo} from './GithubProfileInfo'

@Component({
    selector: 'home',
    providers: [HomeData],
    template: `
    <h1 *ngIf='githubProfileInfo'>Home - {{githubProfileInfo.name}}</h1>
    `
})
export class HomeComponent implements OnInit {
    githubProfileInfo: GithubProfileInfo;
    constructor (private homeData: HomeData) {}

    ngOnInit(): void {
         this.homeData
        .getData()
        .then(profileInfo => {
            console.log(profileInfo)
            this.githubProfileInfo = profileInfo;
        });
    }

}