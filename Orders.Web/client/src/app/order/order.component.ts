﻿import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {OrderModel} from './order.model';
import {OrderService} from './order.service';
import {FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {LocationModel} from './location.model';
import {MdSnackBar, MdSnackBarConfig} from '@angular/material';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
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
      //Check whether its an existing order or a new order using the url
      this.mode = this.router.url.indexOf('new') !== -1?
                    "Create":"Update";
      if(this.id && this.mode === "Update")
        {
            this.mode = 'Update';
            this.orderService.get(Number(this.id))
                        .subscribe(res => {
                                if(res !== null)
                                    this.order = res[0];
            }, err => {
                throw err;
            });
        }
        else
            {
                this.order.userId = Number(this.id);
            }
        this.ordersForm = this.formBuilder.group({
                trackingId:[null, Validators.required],
                locationName: [null, Validators.required],
                street:[null, Validators.required],
                state:[null, Validators.required],
                city:[null, Validators.required],
                zipCode:[null, [Validators.required, Validators.maxLength]]
        });

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
                     let snackBarConfig: MdSnackBarConfig = {
                          extraClasses: ['snackBarMessage']
                      }
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
                    this.router.navigateByUrl('/orders');
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

