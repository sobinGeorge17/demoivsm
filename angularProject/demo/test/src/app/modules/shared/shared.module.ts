import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { MyProductsComponent } from '../../components/my-products/my-products.component';
import { MessageComponent } from '../../components/message/message.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    MyProductsComponent,
    MessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
