import { Routes } from '@angular/router';
import { Tab1Component } from './tab1.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes:Routes = [
  {
    path: '',
    component: Tab1Component
  }
]

@NgModule({
  declarations: [
    Tab1Component
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
export class Tab1Module { }
