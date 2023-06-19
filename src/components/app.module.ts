import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ShippingPageComponent } from './shipping-page/shipping-page.component';
import { AppRoutingModule } from 'src/routes/app-routing.module';
import { MaterialModule } from 'src/modules/material.module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { AuxiliaryModule } from 'src/modules/auxiliary.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingPageComponent,
    ShippingPageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    AuxiliaryModule,
  ],
  providers: [ { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2000 } },],
  bootstrap: [AppComponent]
})
export class AppModule { }
