import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedshomeComponent } from './components/feedshome/feedshome.component';
import { MessagesHomeComponent } from './components/messages-home/messages-home.component';
import { HomeComponent } from './components/home/home.component';
import { SrnListsComponent } from './components/srn-lists/srn-lists.component';
import { WorkOdersListComponent } from './components/work-oders-list/work-oders-list.component';
import { WorkOdersDetailsComponent } from './components/work-oders-details/work-oders-details.component';
import { BulkPsrComponent } from './components/bulk-psr/bulk-psr.component';
import { RegistrationDetailsHomeComponent } from './components/registration-details-home/registration-details-home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FeedshomeComponent,
    children: [
      { path: 'home', component: MessagesHomeComponent },
      { path: 'task', component: HomeComponent },
      { path: 'srn-lists', component: SrnListsComponent },
      { path: 'work-oders', component: WorkOdersListComponent },
      { path: 'work-oders-details', component: WorkOdersDetailsComponent }
    ]
  },
  {path:'bulk-psr',component:BulkPsrComponent},
  {path:'details',component:BulkPsrComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
]

@NgModule({
  declarations: [
    FeedshomeComponent,
    MessagesHomeComponent,
    HomeComponent,
    SrnListsComponent,
    WorkOdersListComponent,
    WorkOdersDetailsComponent,
    BulkPsrComponent,
    RegistrationDetailsHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistrationModule { }
