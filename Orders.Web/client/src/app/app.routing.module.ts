import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UsersComponent} from './user/users.component';
// import { UserComponent }  from './user/user.component';
// import { OrdersComponent }  from './order/orders.component';
// import { OrderComponent }  from './order/order.component';

export const routes: Routes = [
  {  path: 'users', loadChildren: './user/user.module#UserModule'},
  // {path: 'user', component: UserComponent},
  // {path: 'users/:id', component: UserComponent},
  // {path: 'orders', component: OrdersComponent},
  // {path: 'orders/:id', component: OrderComponent},
  // {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
