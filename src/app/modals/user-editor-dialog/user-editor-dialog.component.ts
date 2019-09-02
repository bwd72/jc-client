import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'user-editor-dialog',
    templateUrl: './user-editor-dialog.component.html',
    styleUrls: ['./user-editor-dialog.component.scss']
})
export class UserEditorDialogComponent implements OnInit {
    @Input() user: any;

    constructor() { }

    ngOnInit() {
    }

}
