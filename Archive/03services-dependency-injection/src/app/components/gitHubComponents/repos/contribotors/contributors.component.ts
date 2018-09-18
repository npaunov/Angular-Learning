import { Component, Input } from '@angular/core';
import { GitHubContributorsService } from '../../../gitHubServices/gitHubContributorsService';
import { GitHubContributorModel } from '../../../models/gitHubContributorModel';

@Component({
    selector: 'contributors',
    providers: [GitHubContributorsService],
    templateUrl: './contributors.component.html',
    styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent{

    private _showContributors: boolean;

    @Input() contributorUrl: string;

    @Input()
    set showContributors(showContributors: boolean){
        debugger
        this._showContributors = showContributors;
        this.getContributors();
    }
    
    get showContributors(){return this._showContributors}

    gitHubContributors: Array<GitHubContributorModel>

    constructor ( private contributorsData: GitHubContributorsService ) { }

    getContributors(): void{
        debugger
        if(this._showContributors){
            this.contributorsData
            .getData(this.contributorUrl)
            .then(contr => {
                this.gitHubContributors = contr;
            })
        console.log(this.gitHubContributors);

        }
        else {
            this.contributorUrl = null;
        }
    }

}