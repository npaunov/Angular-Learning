import { Component } from '../../../node_modules/@angular/core';

@Component({
    selector: 'parent',
    template: `
        <h1>Parent</h1>
        <child [fromParent]='titleForChildElement'
        (onSendingDataToParent)='dataReceived($event)'>
        </child>
    `

})
export class ParentComponent {
    titleForChildElement: string = "My parent Title";

    dataReceived(myData){
        alert(myData);
    }
}
