import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserModel} from './user.model';
import {UserService} from './user.service';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';
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
                private formBuilder: FormBuilder,
                private snackBar: MdSnackBar){
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

    delete = () => {
      this.mode = 'Delete';
      this.userService.delete(this.user)
                      .subscribe(this.successCallback, this.errorCallback);
    }

    successCallback = (res) => {
            if(res !== null)
                 {
                    let snackBarRef:any;
                     
                    let snackBarConfig: MdSnackBarConfig = {
                          extraClasses: ['snackBarMessage']
                    }
                   switch(this.mode){
                     case 'Create':
                     {       
                        snackBarRef = this.snackBar.open('user created successfully!',
                        'dismiss', snackBarConfig);
                        this.onSnackBarActionCallback(snackBarRef);
                        break;
                     }
                     case 'Update':
                     {
                        snackBarRef = this.snackBar.open('user updated successfully!',
                        'dismiss', snackBarConfig);
                        this.onSnackBarActionCallback(snackBarRef);
                        break;
                     }
                     case 'Delete':
                     {
                        snackBarRef = this.snackBar.open('user deleted successfully!',
                        'dismiss', snackBarConfig);
                        this.onSnackBarActionCallback(snackBarRef);
                        break;
                     }
                     default:
                      {
                        snackBarRef = this.snackBar.open('invalid operation!',
                        'dismiss', snackBarConfig);
                        this.onSnackBarActionCallback(snackBarRef);
                      }
                   }
                    this.router.navigateByUrl('/users');
                    }
            else {
                    alert("Error!user was not created");
                 }
    }

    errorCallback = (err) => {
        alert("Error:" + err.status + ":" + err.message);
    }

    onSnackBarActionCallback = (snackBarRef) => {
             snackBarRef.onAction().subscribe(() => {
                            snackBarRef.dismiss();
                      });
    }
}
