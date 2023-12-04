import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamePageRoutingModule } from './game-page-routing.module';
import { GamePageComponent } from './game-page.component';
import {NavbarModule} from "../navbar/navbar.module";


@NgModule({
  declarations: [
    GamePageComponent
  ],
    imports: [
        CommonModule,
        GamePageRoutingModule,
        NavbarModule
    ]
})
export class GamePageModule { }
