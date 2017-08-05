import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import {OrderModel} from './order.model';
import { Observable} from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{
    orders: Observable<OrderModel[]>;
    isLoading:Boolean = true;
    noOrdersMessage: String = "Oops! :( You do not have any orders yet. Go ahead and add one!"
    isOrderListEmpty: Boolean = false;
    constructor(private orderService: OrderService,
                private activatedRoute: ActivatedRoute){
    }

    ngOnInit(){
        let userId = this.activatedRoute.snapshot.params.id;
        this.orders = this.orderService.get(userId);
        this.orders.subscribe(res => {
            this.isLoading = false;
            if(!res.length)
                this.isOrderListEmpty = true;
        });
    }
}
