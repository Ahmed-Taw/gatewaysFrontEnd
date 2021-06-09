import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  // {
  //   path: 'gateways',
  //   loadChildren: () =>
  //     import('./gateway/gateway.module').then(m => m.GatewayModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
