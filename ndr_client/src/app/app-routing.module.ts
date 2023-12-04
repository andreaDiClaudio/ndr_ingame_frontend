import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
  { path: 'gallery', loadChildren: () => import('./gallery-page/gallery-page.module').then(m => m.GalleryPageModule) },
  { path: 'gallery/:game', loadChildren: () => import('./game-page/game-page.module').then(m => m.GamePageModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
