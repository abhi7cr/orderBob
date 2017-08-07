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
    orders: OrderModel[];
    pagedOrders: OrderModel[];
    isLoading:Boolean = true;
    noOrdersMessage: String = "Oops! :( You do not have any orders yet. Go ahead and add one!"
    isOrderListEmpty: Boolean = false;
    length = 100;
    pageSize = 10;
    pageSizeOptions = [5, 10, 25, 100];
    position = 'after';

    constructor(private orderService: OrderService,
                private activatedRoute: ActivatedRoute){
                    this.orders = new Array<OrderModel>();
    }

    ngOnInit(){
        let userId = this.activatedRoute.snapshot.params.id;
        let ordersSubscription = this.orderService.get(userId);
        ordersSubscription.subscribe(res => {
            this.isLoading = false;
            this.orders = res;
            if(!this.orders.length)
                this.isOrderListEmpty = true;
            else
                this.pagedOrders = this.orders.slice(0,10);
        });
    }

     onPageOptionsChange = (event) => {
        this.pageSize = event.pageSize;
        let pageIndex = event.pageIndex;
        let startIndex = (pageIndex)*this.pageSize;
        this.pagedOrders = this.orders.slice(startIndex, startIndex + this.pageSize);
    }

    setPageSizeOptions(setPageSizeOptionsInput: string) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
}
