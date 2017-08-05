import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {UserModel} from './user.model';
import { Observable} from 'rxjs/Rx';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
    users: Observable<UserModel[]>;
    isLoading:Boolean = true;
    noUsersMessage: String = "Oops! :( You do not have any users yet. Go ahead and add one!"
    isUserListEmpty: Boolean = false;

    constructor(private userService: UserService){
    }

    ngOnInit(){
        this.users = this.userService.get();
        this.users.subscribe(res => {
            this.isLoading = false;
            if(!res.length)
                this.isUserListEmpty = true;
        });
    }
}
