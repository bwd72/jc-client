import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'new-user-dialog',
    templateUrl: './new-user-dialog.component.html',
    styleUrls: ['./new-user-dialog.component.scss']
})
export class NewUserDialogComponent implements OnInit {
    @Output() createEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() cancelEvent: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild("usernameField", { read: ElementRef, static: false }) usernameField: ElementRef;
    @ViewChild("emailField", { read: ElementRef, static: false }) emailField: ElementRef;

    constructor() { }

    ngOnInit() {
    }


    public emitCancel() {
        this.cancelEvent.emit();
    }


    // TODO: add error checking for absent/invalid values
    public emitCreate() {
        this.createEvent.emit({ username: this.usernameField.nativeElement.value, email: this.emailField.nativeElement.value });
    }
}
