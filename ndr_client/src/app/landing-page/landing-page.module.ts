import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import {AboutModule} from "../about/about.module";
import {NavbarModule} from "../navbar/navbar.module";


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    AboutModule,
    NavbarModule
  ]
})
export class LandingPageModule { }
