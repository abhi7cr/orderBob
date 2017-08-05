import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../shared/material.module';

import { OrderComponent } from './order.component';
import { OrdersComponent } from './orders.component';
import { OrderService } from './order.service';
import {OrderRoutingModule} from './order.routing.module';

@NgModule({
  declarations: [
    OrderComponent,
    OrdersComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    OrderRoutingModule
  ],
  providers: [OrderService],
})
export class OrderModule { }
