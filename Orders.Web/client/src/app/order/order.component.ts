﻿import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {OrderModel} from './order.model';
import {OrderService} from './order.service';
import {FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {LocationModel} from './location.model'

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
                private formBuilder: FormBuilder){
                this.order = new OrderModel();
                this.order.location = new LocationModel();
    }

    ngOnInit(){
      this.id = this.activatedRoute.snapshot.params.id;
      //Check whether its an existing order or a new order using the url
      this.mode = isNaN(Number(this.router.url[this.router.url.length-1]))?
                    "Create":"Update";
      if(this.id && this.mode === "Update")
        {
            this.mode = 'Update';
            this.orderService.getById(Number(this.id))
                        .subscribe(res => {
                                this.order = res;
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
                   switch(this.mode){
                     case 'Create':
                     {
                       alert('order created successfully!');
                       break;
                     }
                     case 'Update':
                     {
                       alert('order updated successfully!');
                       break;
                     }
                     case 'Delete':
                     {
                       alert('order deleted successfully!');
                       break;
                     }
                     default:
                      alert("invalid operation!");
                   }
                    this.router.navigateByUrl('/orders');
                    }
            else {
                    alert("Error!order was not created/updated");
                 }
    }

    errorCallback = (err) => {
        alert("Error:" + err.status + ":" + err.message);
    }
}

