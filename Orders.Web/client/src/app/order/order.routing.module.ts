import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent }  from './orders.component';
import { OrderComponent }  from './order.component';

export const routes: Routes = [
  {path: '', component: OrdersComponent},
  {path: 'order/:id', component: OrderComponent},
  {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}