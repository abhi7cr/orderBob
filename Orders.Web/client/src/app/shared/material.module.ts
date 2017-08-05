import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdInputModule, MdListModule, MdIconModule} from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdListModule, MdIconModule],
  exports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdListModule, MdIconModule]
})
export class MaterialModule { }
