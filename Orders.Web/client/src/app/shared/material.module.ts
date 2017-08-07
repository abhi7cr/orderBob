import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdInputModule, 
  MdListModule, MdIconModule, MdSnackBarModule, MdPaginatorModule, MdTooltipModule} from '@angular/material';
import 'hammerjs';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, 
      MdInputModule, MdListModule, MdIconModule, MdSnackBarModule, MdPaginatorModule, MdTooltipModule],
  exports: [MdButtonModule, MdCheckboxModule, MdInputModule, 
  MdListModule, MdIconModule, MdSnackBarModule, MdPaginatorModule, MdTooltipModule],
})
export class MaterialModule { }
