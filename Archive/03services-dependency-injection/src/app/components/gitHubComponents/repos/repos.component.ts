import { Component, Input } from '@angular/core'
import { GitHubRepoService } from '../../gitHubServices/gitHubRepoService';
import { GitgubRepoModel } from '../../models/gitHubRepoModel';

@Component({
    selector: 'repos',
    providers: [GitHubRepoService],
    templateUrl: './repos.component.html',
    styleUrls: ['./repos.component.css']
    
})
export class ReposComponent {
    
    private _showRepos: boolean;

    @Input()
    set showRepos(showRepos: boolean){
        this._showRepos = showRepos;
        this.getRepos();
    };

    get showRepos(){ return this._showRepos }

    gitHubRepos: Array<GitgubRepoModel>;

    showContributors: boolean = false;
    isContributorUrl: string;
    

    constructor ( private reposData: GitHubRepoService ) { }

    getRepos(): void {
        if(this.showRepos){
            this.reposData
            .getData()
            .then(repos => {
                this.gitHubRepos = repos;
            })
        }
        else{
            this.gitHubRepos = [];
        }

    }    

    activateContributors(url:string){
        this.showContributors = !this.showContributors;
        if(this.showContributors){
            this.isContributorUrl = url + '/contributors';
        }
    }

}