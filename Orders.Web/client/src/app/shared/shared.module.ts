import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule} from '@angular/common';
import { HttpModule} from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    HttpModule,
    RouterModule
  ],
  providers:[]
})
export class SharedModule { }
