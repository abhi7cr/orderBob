import { NgModule } from '@angular/core';
import { SharedModule} from '../shared/shared.module';
import { MaterialModule} from '../shared/material.module';
import { UserComponent } from './user.component';
import { UsersComponent } from './users.component';
import { UserService } from './user.service';
import {UserRoutingModule} from './user.routing.module';


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent
  ],
  imports: [
    SharedModule,
    MaterialModule,
    UserRoutingModule
  ],
  providers: [UserService]
})
export class UserModule { }
