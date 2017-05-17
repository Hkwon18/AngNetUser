import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
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

    addUser(user: User) {
        let headers = new Headers({'Content-Type':'application/json; charset=utf-8' });
        let body = JSON.stringify(user);
        let options = new RequestOptions({ headers: headers });
        return this.http.post('api/DB/AddUser', body, options)
            .map(response => response.json() as User[])
           .toPromise().catch(this.handleError);
    }
    //response => response.json() as User[]

    private handleError(error: any) {
        alert('User already exists. Could not add user.');
        return this.getUserList();
    }
}