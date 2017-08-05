﻿import {LocationModel} from './location.model';
export class OrderModel{

    constructor(public trackingId?:string,
                public orderId?:number,
                public userId? :number,
                public location?: LocationModel){
                        }
 }


