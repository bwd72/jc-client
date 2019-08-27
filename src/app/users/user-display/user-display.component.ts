import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'user-display',
    templateUrl: './user-display.component.html',
    styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {
    @Input() users: any;

    constructor() { }

    ngOnInit() {
    }

}
