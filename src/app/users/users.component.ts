import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    @ViewChild("confirmDeleteDialog", { read: ElementRef, static: false }) confirmDeleteDialog: ElementRef;
    @ViewChild("userEditorDialog", { read: ElementRef, static: false }) userEditorDialog: ElementRef;

    public users: any[];

    public showDeleteDialog = false;
    public showEditDialog = false;

    // Selected user data struct initialized to empty strings to avoid undefined problems in forms
    private selectedUser: any = {
        firstname: "",
        middlename: "",
        lastname: "",
        username: "",
        email: "",
        description: ""
    };

    constructor(private usersService: UsersService) { }

    ngOnInit() {
        this.usersService.getUsers()
            .subscribe((users) => { this.users = users.results; });
    }


    private findUserById(id: string): any {
        return this.users.find((user) => (id === user.id));
    }


    cancelled() {
        this.showDeleteDialog = false;
    }


    confirmed() {
        console.log("Confirmed!  USER IS TOAST!!!");
    }


    selectUser(event: any) {
        if (!this.showDeleteDialog) {
            this.selectedUser = this.findUserById(event.id);
            if (this.selectedUser != null) {
                this.userEditorDialog.nativeElement.style.position = "absolute";
                this.userEditorDialog.nativeElement.style.left = "100px";
                this.userEditorDialog.nativeElement.style.top = event.clientY + "px";
                this.showEditDialog = true;
            }
        }
    }


    closeEditDialog() {
        this.showEditDialog = false;
    }


    deleteUser(event: any) {
        if (!this.showEditDialog) {
            this.selectedUser = this.findUserById(event.id);
            if (this.selectedUser != null) {
                this.confirmDeleteDialog.nativeElement.style.position = "absolute";
                this.confirmDeleteDialog.nativeElement.style.left = "100px";
                this.confirmDeleteDialog.nativeElement.style.top = event.clientY + "px";
                this.showDeleteDialog = true;
            }
        }
    }
}
