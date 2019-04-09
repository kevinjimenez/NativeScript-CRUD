import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { Tab2Component } from './tab2.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Component
  }
]

@NgModule({
  declarations: [
    Tab2Component
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
export class Tab2Module { }
