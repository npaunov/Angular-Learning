import { Component } from '@angular/core';

@Component({
    selector: 'list',
    template: `
        <button (click)="changeListState()">{{buttonText}} List</button>
        <ul *ngIf='showList'>
            <li *ngFor= 'let number of numbers'>
            {{number}}
            </li>
        </ul>
    `

})
export class ListComponent {
    numbers = [1, 2, 3, 4, 5];
    showList = true;
    buttonText = 'Hide';

    changeListState() {
        this.showList = !this.showList;

        if (this.showList) {
            this.buttonText = 'Hide';
        } else {
            this.buttonText = 'Show';
        }

    }

}
