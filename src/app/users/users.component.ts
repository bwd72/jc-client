import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    public users: any;

    constructor(private usersService: UsersService) { }

    ngOnInit() {
        this.usersService.getUsers()
            .subscribe((users) => { console.log(users); this.users = users.results; });
    }

    cancelled() {
        console.log("Cancelled!");
    }

    confirmed() {
        console.log("Confirmed!");
    }
}
