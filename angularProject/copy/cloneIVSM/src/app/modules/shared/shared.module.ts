import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MessageComponent } from '../../components/message/message.component';
import { MyProductsComponent } from '../../components/my-products/my-products.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';




@NgModule({
  declarations: [
    HeaderComponent,
    MessageComponent,
    MyProductsComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    MessageComponent,
    MyProductsComponent,
    SideBarComponent
  
  ]
})
export class SharedModule { }
