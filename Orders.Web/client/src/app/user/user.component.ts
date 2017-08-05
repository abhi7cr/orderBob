import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserModel} from './user.model';
import {UserService} from './user.service';
import {FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    user: UserModel;
    usersForm: FormGroup;
    mode: string;
    constructor(private activatedRoute:ActivatedRoute,
                private userService: UserService,
                private router: Router,
                private formBuilder: FormBuilder){
                this.user = new UserModel();
    }

    ngOnInit(){
      this.user.userId = this.activatedRoute.snapshot.params.id;
      if(this.user.userId)
        {
            this.mode = 'Update';
            this.userService.getById(Number(this.user.userId))
                        .subscribe(res => {
                                this.user = res;
            }, err => {
                throw err;
            });
        }
        else
            {
                this.mode = 'Create';
            }
        this.usersForm = this.formBuilder.group({
                firstName:['John', Validators.required],
                lastName: ['Son', Validators.required]
        });

    }

    createOrUpdate = () => {
        this.user.userId?
            this.userService.update(this.user)
                        .subscribe(this.successCallback, this.errorCallback):
            this.userService.create(this.user)
                        .subscribe(this.successCallback, this.errorCallback);
    }

    successCallback = (res) => {
            if(res !== null)
                 {
                    this.user.userId !== undefined? 
                        alert('user updated successfully!'):
                        alert('user created successfully!');
                    this.router.navigateByUrl('/users');
                    }
            else {
                    alert("Error!user was not created");
                 }
    }

    errorCallback = (err) => {
        alert("Error:" + err.status + ":" + err.message);
    }
}
