import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdInputModule, 
  MdListModule, MdIconModule, MdSnackBarModule} from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, 
      MdInputModule, MdListModule, MdIconModule, MdSnackBarModule],
  exports: [MdButtonModule, MdCheckboxModule, MdInputModule, 
  MdListModule, MdIconModule, MdSnackBarModule],
})
export class MaterialModule { }
