import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {OrderModel} from './order.model';

@Injectable()
export class OrderService {
    headers: Headers = null;

     constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json;charset=utf-8;');
    }

    get = (userId: number):Observable<OrderModel[]> => {
            // let searchParams = new URLSearchParams();
            // searchParams.append('userId', userId.toString());
            return this.http.get('/api/getOrdersByUser/'+ userId).map(res => res.json())
    }

    getById = (id: number):Observable<OrderModel> => {
            return this.http.get('/api/getOrder/'+id).map(res => res.json())
    }

    create = (order: OrderModel):Observable<OrderModel> => {
        let orderToCreate= this.prepareOrderObjectToSend(order);

        return this.http.post('/api/createOrder', orderToCreate, {headers: this.headers})
                        .map(res => res.json())
    }

     update = (order: OrderModel):Observable<OrderModel> => {
        let orderToUpdate = this.prepareOrderObjectToSend(order);

        return this.http.put('/api/updateOrder/'+ order.orderId, orderToUpdate, {headers: this.headers})
                        .map(res => res.json())
    }

    delete = (order: OrderModel):Observable<OrderModel> => {
        let orderToDelete = this.prepareOrderObjectToSend(order);

        let request = new RequestOptions();
        request.body = orderToDelete;
        request.method = 'DELETE';
        request.headers = this.headers;

        return this.http.delete('/api/deleteOrder', request)
                        .map(res => res.json())
    }

    prepareOrderObjectToSend = (order:OrderModel):any => {
            return {
                TrackingId: order.trackingId,
                UserId: order.userId,
                Id: order.orderId !== 0? order.orderId: undefined,
                Location: {
                    Name: order.location.name,
                    City: order.location.city,
                    State:order.location.state,
                    ZipCode:order.location.zipCode,
                    Street:order.location.street,
                    Id: order.location.id !== 0? order.location.id: null        
            }
        }  
    }
}