import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { GitHubProfileModel } from '../models/gitHubProfileModel';

let url = 'https://api.github.com/users/ivaylokenov';

@Injectable()
export class GitHubProfileService {

    constructor(private http: Http) { }

    getData(currentUrl = url): Promise<GitHubProfileModel> {
        return this.http
            .get(currentUrl)
            .toPromise()
            .then(res => res.json() as GitHubProfileModel)
            .catch(err => {
                console.log(err);
                return new GitHubProfileModel();
            })
    }
}