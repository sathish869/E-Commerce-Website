import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShippingPageComponent } from 'src/components/shipping-page/shipping-page.component';

const shippingRoutes = [
  {
    path: '',
    component: ShippingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(shippingRoutes)],
  exports: [RouterModule],
})
export class shippingRouteModule {}
