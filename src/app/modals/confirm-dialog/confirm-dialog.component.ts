import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
    @Input() title: string;
    @Input() highlightedInfo: string;
    @Output() clickCancel: EventEmitter<any> = new EventEmitter<any>();
    @Output() clickConfirm: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    emitCancel() {
        console.log("Cancel");
        this.clickCancel.emit("cancel");
    }

    emitConfirm() {
        console.log("Confirm");
        this.clickConfirm.emit("confirm");
    }
}
