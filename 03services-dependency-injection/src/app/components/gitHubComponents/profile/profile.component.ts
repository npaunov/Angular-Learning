import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { GitHubProfileService } from '../../gitHubServices/gitHubProfileService';
import { GitHubProfileModel } from '../../models/gitHubProfileModel';

@Component({
    selector: 'profile',
    providers: [GitHubProfileService],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
    
})
export class ProfileComponent implements OnInit {
    
    isFolowersVisible: boolean = false;
    isReposVisible: boolean = false;

    gitHubProfileModel: GitHubProfileModel


    constructor ( private profileData: GitHubProfileService ) { }

    ngOnInit(): void {
        this.profileData
        .getData()
        .then(profile => {
            this.gitHubProfileModel = profile;
        })
    }

    activateFolowers(){
        this.isFolowersVisible = !this.isFolowersVisible;
    }
    activateRepos(){
        this.isReposVisible = !this.isReposVisible;
    }
}