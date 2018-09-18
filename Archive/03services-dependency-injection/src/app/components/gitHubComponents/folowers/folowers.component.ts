import { Component, Input } from '@angular/core'
import { GitHubFolowersService } from '../../gitHubServices/gitHubFolowersService';
import { GitHubFolowerModel } from '../../models/gitHubFolowerModel';

@Component({
    selector: 'folowers',
    providers: [GitHubFolowersService],
    templateUrl: './folowers.component.html',
    styleUrls: ['./folowers.component.css']
    
})
export class FolowersComponent {   
    

    private _showFolowers;

    @Input()
    set showFolowers(showFolowers: boolean){
        this._showFolowers = showFolowers;
        this.getFolowers()
    };

    get showFolowers(): boolean { return this._showFolowers; }


    gitHubFolowers: Array<GitHubFolowerModel>;
    

    constructor ( private folowerData: GitHubFolowersService ) { }


    getFolowers(): void {
        if(this.showFolowers){
            this.folowerData
            .getData()
            .then(folowers => {
                this.gitHubFolowers = folowers;
            })
        }
        else{
            this.gitHubFolowers = [];
        }

    }

}