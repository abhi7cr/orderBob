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
        this.headers.append('Content-Type', 'application/json');
    }

    get = (userId: number):Observable<OrderModel[]> => {
            return this.http.get('/api/users/+' + userId + '/orders').map(res => res.json())
    }

    getById = (id: number, userId:number):Observable<OrderModel> => {
            return this.http.get('/api/users/'+ userId + '/orders/'+id).map(res => res.json())
    }

    create = (order: OrderModel):Observable<OrderModel> => {
        let orderToCreate= this.prepareOrderObjectToSend(order);

        return this.http.post('/api/users/' + order.userId+ '/orders', orderToCreate, {headers: this.headers})
                        .map(res => res.json())
    }

    update = (order: OrderModel):Observable<OrderModel> => {
        let orderToUpdate = this.prepareOrderObjectToSend(order);

        return this.http.put('/api/users/' + order.userId + '/orders', orderToUpdate, {headers: this.headers})
                        .map(res => res.json())
    }

    delete = (order: OrderModel):Observable<OrderModel> => {
        let orderToDelete = this.prepareOrderObjectToSend(order);

        let request = new RequestOptions();
        request.body = orderToDelete;
        request.method = 'DELETE';
        request.headers = this.headers;

        return this.http.delete('/api/users/' + order.userId + '/orders', request)
                        .map(res => res.json())
    }

    prepareOrderObjectToSend = (order:OrderModel):any => {
            return {
                TrackingId: order.trackingId,
                UserId: order.userId,
                OrderId: order.orderId !== 0? order.orderId: undefined,
                Location: {
                    Name: order.location.name,
                    City: order.location.city,
                    State:order.location.state,
                    ZipCode:order.location.zipCode,
                    Street:order.location.street,
                    LocationId: order.location.locationId !== 0? 
                                            order.location.locationId: null        
            }
        }  
    }
}