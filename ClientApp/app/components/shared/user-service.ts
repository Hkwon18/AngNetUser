import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user-type';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    constructor(private http: Http)
    {
    }

    getUserList() {
        return this.http.get('api/DB/GetUserList').map(response => response.json() as User[]).toPromise();
    }

}