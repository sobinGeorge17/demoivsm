import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MessageHomeComponent } from './components/message-home/message-home.component';
import { TrolleysComponent } from './components/trolleys/trolleys.component';
import { SrnListsComponent } from './components/srn-lists/srn-lists.component';
import { SrnCreationComponent } from './components/srn-creation/srn-creation.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';

const routes:Routes =[
  {path:'',component:HomeComponent,children:[
    {path:'home',component:MessageHomeComponent},
    {path:'tasks',component:TrolleysComponent},
    {path:'srn-lists',component:SrnListsComponent}
  ]},
  {path:'create-srn',component:SrnCreationComponent},
  {path:'**',redirectTo:'', pathMatch:'full'}
]

@NgModule({
  declarations: [
    HomeComponent,
    MessageHomeComponent,
    TrolleysComponent,
    SrnListsComponent,
    SrnCreationComponent,
    LeftSideBarComponent,
    RightSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ReceivingModule { }
