import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
export enum RouteNames{
  home = "",
  albums = "albums"
}
const applicationRoutes: Routes = [
  {path: RouteNames.home, component: AppComponent},
  {path: RouteNames.albums, component: AppComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ApplicationRouterModule { }
