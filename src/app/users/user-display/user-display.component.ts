import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'user-display',
    templateUrl: './user-display.component.html',
    styleUrls: ['./user-display.component.scss']
})
export class UserDisplayComponent implements OnInit {
    @Input() users: any;
    @Output() selectEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }


    public emitSelect(event: MouseEvent, id: string) {
        this.selectEvent.emit({ id, clientX: event.clientX, clientY: event.clientY });
    }


    public emitDelete(event: MouseEvent, id: string) {
        this.deleteEvent.emit({ id, clientX: event.clientX, clientY: event.clientY });
    }
}
