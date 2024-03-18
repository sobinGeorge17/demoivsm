import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LadingComponent } from './components/lading/lading.component';
import { MessageComponent } from './components/message/message.component';
import { WeightsComponent } from './components/weights/weights.component';
import { DimensionsComponent } from './components/dimensions/dimensions.component';
import { PharmaComponent } from './components/pharma/pharma.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';
import { SharedModule } from '../shared/shared.module';
import { LeftBarMenuComponent } from './components/left-bar-menu/left-bar-menu.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';

const routes: Routes = [

  {
    path: '', component: LadingComponent,
    children: [
      { path: '', component: MessageComponent },
      { path: 'weights', component: WeightsComponent },
      { path: 'dimensions', component: DimensionsComponent },
      {path:'pharma',component:PharmaComponent},
      {path:'products',component:ProductsComponent}
    ]
  },
  { path: 'details', component: ProductDetailsPageComponent },
  { path: '**', redirectTo: '', pathMatch: "full" },

 
]

@NgModule({
  declarations: [
    LadingComponent,
    MessageComponent,
    WeightsComponent,
    DimensionsComponent,
    PharmaComponent,
    ProductsComponent,
    ProductDetailsPageComponent,
    LeftBarMenuComponent,
    RightSideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class Dc1Module { }
