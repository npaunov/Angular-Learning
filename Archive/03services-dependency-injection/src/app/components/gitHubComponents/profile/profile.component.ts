import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { GitHubProfileService } from '../../gitHubServices/gitHubProfileService';
import { GitHubProfileModel } from '../../models/gitHubProfileModel';

@Component({
    selector: 'profile',
    providers: [GitHubProfileService],
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']

})
export class ProfileComponent implements OnInit {

    @ViewChild('folowersButton') folowersButton: ElementRef;
    @ViewChild('reposButton') reposButton: ElementRef;

    isFolowersVisible: boolean = false;
    isReposVisible: boolean = false;

    gitHubProfileModel: GitHubProfileModel


    constructor(private profileData: GitHubProfileService) { }

    ngOnInit(): void {
        this.profileData
            .getData()
            .then(profile => {
                this.gitHubProfileModel = profile;
            })
    }

    activateFolowers() {
        this.isFolowersVisible = !this.isFolowersVisible;
        if (!this.isFolowersVisible) {
            this.folowersButton.nativeElement.innerText = 'Show 10 folowers';
        } else {
            this.folowersButton.nativeElement.innerText = 'Hide 10 folowers'
        }
    }
    activateRepos() {
        this.isReposVisible = !this.isReposVisible;
        if (!this.isReposVisible) {
            this.reposButton.nativeElement.innerText = 'Show 10 repos';
        } else {
            this.reposButton.nativeElement.innerText = 'Hide 10 repos';
        }
    }
}