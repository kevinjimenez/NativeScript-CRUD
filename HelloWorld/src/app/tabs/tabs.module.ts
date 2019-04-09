import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TabsRoutingModule } from './tabs-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { TabsComponent } from './tabs.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { Tab3Module } from './tab3/tab3.module';
import { Tab1Module } from './tab1/tab1.module';
import { Tab2Module } from './tab2/tab2.module';

@NgModule({
  declarations:
    [
      TabsComponent,
      Tab1Component,
      Tab2Component,
      Tab3Component
    ],
  imports: [
    TabsRoutingModule,
    NativeScriptCommonModule,
    // Tab1Module,
    // Tab2Module,
    // Tab3Module
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule { }
