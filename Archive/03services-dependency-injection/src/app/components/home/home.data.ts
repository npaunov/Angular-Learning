import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GithubProfileInfo } from './GithubProfileInfo';

const url = 'https://api.github.com/users/ivaylokenov';

@Injectable()
export class HomeData {

    constructor(private http: Http) { }

    getData(): Promise<GithubProfileInfo> {
        return this.http
            .get(url)
            .toPromise()
            .then(resp => resp.json() as GithubProfileInfo)
            .catch(err => {
                console.log(err);
                return new GithubProfileInfo();
            })
    }
}