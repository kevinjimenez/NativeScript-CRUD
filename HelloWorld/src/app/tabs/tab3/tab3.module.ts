import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { Tab3Component } from './tab3.component';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: Tab3Component
  }
]

@NgModule({
  declarations: [
    Tab3Component
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  // exports: [
  //   NativeScriptRouterModule
  // ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class Tab3Module { }
