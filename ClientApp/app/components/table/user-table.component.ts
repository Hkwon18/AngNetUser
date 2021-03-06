﻿import { Component, } from '@angular/core';
import { User } from '../shared/user-type';
import { UserService } from '../shared/user-service';

@Component({
    selector: 'user-table',
    templateUrl: './user-table.component.html',

})
export class UserTableComponent {
    userList: User[];

    constructor(private userService: UserService) {
    }

    onAddUser(user: User) {
        this.userService.addUser(user).then(users => this.userList = users);
 
    }
    ngOnInit() {
        this.userService.getUserList().then(users => this.userList = users);
    }
}
