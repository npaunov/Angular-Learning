import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { GitHubFolowerModel } from '../models/gitHubFolowerModel';

const url = 'https://api.github.com/users/ivaylokenov/followers';

@Injectable()
export class GitHubFolowersService {

    constructor(private http: Http) { }

    getData(): Promise<GitHubFolowerModel[]> {
        return this.http
            .get(url)
            .toPromise()
            .then(res => res.json().slice(0,10).map(item => {
                let folower = new GitHubFolowerModel()
                folower.login = item.login;
                folower.avatar_url = item.avatar_url;
                folower.html_url = item.html_url;
                return folower;
            }))
            .catch(err => {
                console.log(err);
                return new Array<GitHubFolowerModel>();
            })
    }
}