import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'user-options',
    templateUrl: './user-options.component.html',
    styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent implements OnInit {
    @Output() addEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }


    emitAddNew() {
        this.addEvent.emit();
    }
}
