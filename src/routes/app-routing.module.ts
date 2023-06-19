import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appsRoute: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  {
    path: 'ship',
    loadChildren: () =>
      import('./shippingRoute.module').then((m) => m.shippingRouteModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./shoppingRoute.module').then((m) => m.shoppingRouteModule),
  },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(appsRoute)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
