import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {UserModel} from './user.model';

@Injectable()
export class UserService {
    headers: Headers = null;

     constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    get = ():Observable<UserModel[]> => {
            return this.http.get('/api/users').map(res => res.json())
    }

    getById = (id: number):Observable<UserModel> => {
            return this.http.get('/api/users/'+id).map(res => res.json())
    }

    create = (user: UserModel):Observable<UserModel> => {
            let userToSend = this.prepareUserToSend(user);

            return this.http.post('/api/users', userToSend, {headers: this.headers})
                        .map(res => res.json())
    }

    update = (user: UserModel):Observable<UserModel> => {
        let userToSend = this.prepareUserToSend(user);

        return this.http.put('/api/users/'+ user.userId, userToSend, {headers: this.headers})
                        .map(res => res.json())
    }

     delete = (user: UserModel):Observable<UserModel> => {
        let orderToDelete = this.prepareUserToSend(user);

        let request = new RequestOptions();
        request.body = orderToDelete;
        request.method = 'DELETE';
        request.headers = this.headers;

        return this.http.delete('/api/users', request)
                        .map(res => res.json())
    }

    prepareUserToSend = (user: UserModel) => {
        return {
            FirstName: user.firstName,
            LastName:  user.lastName,
            UserId: user.userId != 0? user.userId: null
        }
    }

}