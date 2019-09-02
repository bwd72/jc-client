import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'user-editor-dialog',
    templateUrl: './user-editor-dialog.component.html',
    styleUrls: ['./user-editor-dialog.component.scss']
})
export class UserEditorDialogComponent implements OnInit {
    @Input() user: any;
    @Output() closeEvent: EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    public emitClose() {
        this.closeEvent.emit();
    }
}
