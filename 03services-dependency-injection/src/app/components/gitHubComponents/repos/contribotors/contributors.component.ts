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

    @Input()showContributors: boolean = true;
    @Input()contributorUrl: string;

    gitHubContributors: Array<GitHubContributorModel>

    constructor ( private contributorsData: GitHubContributorsService ) { }

    ngOnChanges() {
        debugger
        this.getContributors();
    }

    getContributors(): void{
        if(this.showContributors){
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