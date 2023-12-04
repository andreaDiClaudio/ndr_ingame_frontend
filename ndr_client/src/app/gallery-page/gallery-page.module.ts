import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { GalleryPageComponent } from './gallery-page.component';
import {NavbarModule} from "../navbar/navbar.module";


@NgModule({
  declarations: [
    GalleryPageComponent
  ],
    imports: [
        CommonModule,
        GalleryPageRoutingModule,
        NavbarModule
    ]
})
export class GalleryPageModule { }
