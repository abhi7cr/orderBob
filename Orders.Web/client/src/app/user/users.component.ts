import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {UserModel} from './user.model';
import { Observable} from 'rxjs/Rx';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
    users: UserModel[];
    isLoading:Boolean = true;
    noUsersMessage: String = "Oops! :( You do not have any users yet. Go ahead and add one!"
    isUserListEmpty: Boolean = false;
    // MdPaginator Input
    length = 0;
    pageSize = 10;
    pageSizeOptions = [5, 10, 25, 100];
    pagedUsers: UserModel[];
    // MdPaginator Output
    pageEvent: PageEvent;
    position = 'after';

    constructor(private userService: UserService){
        this.users = new Array<UserModel>();
    }

    ngOnInit(){
        let usersSubscription = this.userService.get();
        usersSubscription.subscribe(res => {
            this.isLoading = false;
            this.users = res;
            this.length = this.users.length;
            if(!this.users.length)
                this.isUserListEmpty = true;
            else{
                this.pagedUsers = this.users.slice(0, 10); 
            }
        });
    }

    onPageOptionsChange = (event) => {
        this.pageSize = event.pageSize;
        let pageIndex = event.pageIndex;
        let startIndex = (pageIndex)*this.pageSize;
        this.pagedUsers = this.users.slice(startIndex, startIndex + this.pageSize);
    }

    setPageSizeOptions(setPageSizeOptionsInput: string) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
}
