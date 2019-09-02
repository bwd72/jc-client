import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'user-editor-dialog',
    templateUrl: './user-editor-dialog.component.html',
    styleUrls: ['./user-editor-dialog.component.scss']
})
export class UserEditorDialogComponent implements OnInit {
    @Input() user: any;
    @Output() closeEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() updateEvent: EventEmitter<any> = new EventEmitter<any>();

    dataChanged = new Subject<any>();

    // Controls display of wait icon.  Needs to be wrapped in object so we can pass it
    //   by reference
    public waitIcon = {
        show: false
    };

    constructor() { }

    ngOnInit() {

        // When the model has changed (and debounce time passes) emit the updateEvent
        this.dataChanged
            .pipe(debounceTime(400))
            .subscribe(() => this.updateEvent.emit(this.waitIcon));
    }

    public emitClose() {
        this.closeEvent.emit();
    }


    public changed() {
        this.dataChanged.next();
    }
}
