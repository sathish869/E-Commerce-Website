import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingPageComponent } from 'src/components/shopping-page/shopping-page.component';

const shoppingRoutes = [
  {
    path: '',
    component: ShoppingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(shoppingRoutes)],
  exports: [RouterModule],
})
export class shoppingRouteModule {}
