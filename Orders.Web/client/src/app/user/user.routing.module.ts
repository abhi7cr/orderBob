import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent} from './users.component';
import { UserComponent }  from './user.component';

export const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'users', component: UsersComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'user/:id/orders', loadChildren: '../order/order.module#OrderModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}