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
    
    @Input() showFolowers;
    gitHubFolowers: Array<GitHubFolowerModel>;
    

    constructor ( private folowerData: GitHubFolowersService ) { }

    ngOnChanges() {
        this.getFolowers()
    }

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
    

    f(e){
        console.log(this.showFolowers)
    }

}