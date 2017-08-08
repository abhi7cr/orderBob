﻿import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {OrderModel} from './order.model';
import {OrderService} from './order.service';
import {FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {LocationModel} from './location.model';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent {
    order: OrderModel;
    id: string;
    ordersForm: FormGroup;
    mode: string;
    constructor(private activatedRoute:ActivatedRoute,
                private orderService: OrderService,
                private router: Router,
                private formBuilder: FormBuilder,
                private snackBar: MdSnackBar){
                this.order = new OrderModel();
                this.order.location = new LocationModel();
    }

    ngOnInit(){

      this.id = this.activatedRoute.snapshot.params.id;
      let route = this.router.url;
      let userIdPath =  route.split('/orders')[0].split('users/')[1];
      this.order.userId = Number(userIdPath);

      this.ordersForm = this.formBuilder.group({
                trackingId:[null, Validators.required],
                locationName: [null, Validators.required],
                street:[null, Validators.required],
                state:[null, Validators.required],
                city:[null, Validators.required],
                zipCode:[null, [Validators.required, Validators.maxLength]]
        });

      //New order, extract userid from route
      if(this.id === 'new'){       
            this.mode = 'Create';
      }
      else
        this.mode = 'Update';
    
      if(this.mode === "Update")
        {
            this.mode = 'Update';
            this.orderService.getById(Number(this.id), this.order.userId)
                        .subscribe(res => {
                                if(res !== null)
                                    this.order = res;
            }, err => {
                throw err;
            });
        }
    }

    createOrUpdate = () => {
        if(this.mode === 'Update')
            this.orderService.update(this.order)
                        .subscribe(this.successCallback, this.errorCallback);
        else
            this.orderService.create(this.order)
                        .subscribe(this.successCallback, this.errorCallback);
    }

    delete = () => {
      this.mode = 'Delete';
      this.orderService.delete(this.order)
                      .subscribe(this.successCallback, this.errorCallback);
    }

    successCallback = (res) => {
            if(res !== null)
                 {
                     let snackBarRef:any;
                     let snackBarConfig = new MdSnackBarConfig();
                     snackBarConfig.extraClasses = ['snackBarMessage'];

                   switch(this.mode){
                     case 'Create':
                     {       
                        snackBarRef = this.snackBar.open(
                            'order created successfully!',
                            'dismiss', snackBarConfig);
                        this.onSnackBarActionCallback(snackBarRef);
                        break;
                     }
                     case 'Update':
                     {
                      snackBarRef = this.snackBar.open(
                          'order updated successfully!',
                          'dismiss', snackBarConfig);
                      this.onSnackBarActionCallback(snackBarRef);
                      break;
                     }
                     case 'Delete':
                     {
                       snackBarRef = this.snackBar.open('order deleted successfully!',
                       'dismiss', snackBarConfig);
                       this.onSnackBarActionCallback(snackBarRef);
                       break;
                     }
                     default:{
                         snackBarRef = this.snackBar.open('invalid operation!',
                         'dismiss', snackBarConfig);
                         this.onSnackBarActionCallback(snackBarRef);
                     }        
                   }
                    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
                    }
            else {
                    alert("Error!Unable to " + this.mode + " order");
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

