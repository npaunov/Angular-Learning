import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { GitHubContributorModel } from '../models/gitHubContributorModel';
import { GitHubProfileService } from '../../components/gitHubServices/gitHubProfileService';

@Injectable()
export class GitHubContributorsService {

    constructor(private http: Http, private profileData: GitHubProfileService ) { }

    getData(url:string): Promise<GitHubContributorModel[]> {
        return this.http
            .get(url)
            .toPromise()
            .then(res => res.json().slice(0,10).map(item => {
                var contributor = new GitHubContributorModel();
                 debugger
                

                contributor.avatar_url = item.avatar_url;
                contributor.contributions = item.contributions;
                contributor.url = item.url;
                
                return contributor;
            }))
            .then(function(result){
                debugger

                return this.http
                .get(result.url).toPromise()
                // return result;
                //  this.profileData
                //     .getData(item.url)
                //     .then(profile => {
                //         contributor.name = profile.name;
                //     })
            })
            .catch(err => {
                console.log(err);
                return new Array<GitHubContributorModel>();
            })
    }
}