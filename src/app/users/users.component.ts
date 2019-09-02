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

    // These booleans control display of the modal dialogs; true = show, false = hide
    public showDeleteDialog = false;
    public showEditDialog = false;
    public showNewDialog = false;

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



    /*
    ** Edit/Update Methods --------------------------------------------------------------------------------
    */
    selectUser(event: any) {
        if (!this.showDeleteDialog && !this.showNewDialog) {
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

    public updateUser(waitIcon: any) {
        waitIcon.show = true;

        setTimeout(() => {
            waitIcon.show = false;
        }, 2000);
    }



    /*
    ** Delete Methods --------------------------------------------------------------------------------
    */
    deleteUser(event: any) {
        if (!this.showEditDialog && !this.showNewDialog) {
            this.selectedUser = this.findUserById(event.id);
            if (this.selectedUser != null) {
                this.confirmDeleteDialog.nativeElement.style.position = "absolute";
                this.confirmDeleteDialog.nativeElement.style.left = "100px";
                this.confirmDeleteDialog.nativeElement.style.top = event.clientY + "px";
                this.showDeleteDialog = true;
            }
        }
    }

    public cancelDelete() {
        this.showDeleteDialog = false;
    }

    public confirmDelete() {
        console.log("Confirmed!  USER IS TOAST!!!", this.selectedUser.id);
        this.usersService.deleteUser(this.selectedUser.id)
            .subscribe((user) => {
                this.showDeleteDialog = false;
                this.usersService.getUsers()
                    .subscribe((users) => { this.users = users.results; });
            });
    }



    /*
    ** Create Methods --------------------------------------------------------------------------------
    */
    addUser() {
        if (!this.showDeleteDialog && !this.showEditDialog) {
            this.showNewDialog = true;
        }
    }

    // TODO: create types for the object passed in, instead of any
    // TODO: error handling
    public createNewUser(event: any) {
        this.usersService.createUser(event)
            .subscribe((user) => {
                const newUserId = user.id;
                this.showNewDialog = false;

                // Refresh the users list, then re-fetch the user record by the id
                this.usersService.getUsers()
                    .subscribe((users) => {
                        this.users = users.results;

                        this.selectedUser = this.findUserById(newUserId);

                        this.userEditorDialog.nativeElement.style.position = "absolute";
                        this.userEditorDialog.nativeElement.style.left = "200px";
                        this.userEditorDialog.nativeElement.style.top = "100px";

                        this.showEditDialog = true;
                    });
            });
    }

    public cancelNewUser() {
        this.showNewDialog = false;
    }
}
