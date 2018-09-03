import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { GitgubRepoModel } from '../models/gitHubRepoModel';

const url = 'https://api.github.com/users/ivaylokenov/repos';

@Injectable()
export class GitHubRepoService {

    constructor(private http: Http) { }

    getData(): Promise<GitgubRepoModel[]> {
        return this.http
            .get(url)
            .toPromise()
            .then(res => res.json().slice(0,10).map(item => {
                let repo = new GitgubRepoModel()
                repo.name = item.name;
                repo.language = item.language;
                repo.stargazers_count = item.stargazers_count;
                repo.html_url = item.html_url;
                repo.url = item.url;
                return repo;
            }))
            .catch(err => {
                console.log(err);
                return new Array<GitgubRepoModel>();
            })
    }
}