import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'receiving',loadChildren:()=>import('./modules/receiving/receiving.module').then(m=>m.ReceivingModule)},
  { path: 'dc1', loadChildren: () => import('./modules/dc1/dc1.module').then(m => m.Dc1Module) },
  {path:'registration',loadChildren:()=>import('./modules/registration/registration.module').then(m=>m.RegistrationModule)},
  
  { path: '', loadChildren: () => import('./modules/authentication/authentication.module')
  .then(m => m.AuthenticationModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
