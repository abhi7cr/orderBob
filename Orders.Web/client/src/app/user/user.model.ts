import {OrderModel} from '../order/order.model';

export class UserModel{

    constructor(public firstName?:string,
                public lastName?:string,
                public userId?: number,
                public orders?:OrderModel[]){
                }
}
