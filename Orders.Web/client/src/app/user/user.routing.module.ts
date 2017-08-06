import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent} from './users.component';
import { UserComponent }  from './user.component';

export const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'users', component: UsersComponent},
  {path: 'new', component: UserComponent},
  {path: ':id', component: UserComponent},
  {path: ':id/orders', loadChildren: '../order/order.module#OrderModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}