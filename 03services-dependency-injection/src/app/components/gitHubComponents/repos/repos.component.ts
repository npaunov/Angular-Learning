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
    
    @Input() showRepos;
    gitHubRepos: Array<GitgubRepoModel>;

    showContributors: boolean = true;
    isContributorUrl: string;
    

    constructor ( private reposData: GitHubRepoService ) { }

    ngOnChanges() {
        this.getRepos()
    }

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

        if(this.showContributors){
            debugger
            this.isContributorUrl = url + '/contributors';
        }
        // this.showContributors = !this.showContributors;
    }

}