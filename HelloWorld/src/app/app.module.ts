import { Tab1Component } from './tabs/tab1/tab1.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Tab2Component } from './tabs/tab2/tab2.component';
import { Tab3Component } from './tabs/tab3/tab3.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        Tab1Component,
        Tab2Component,
        Tab3Component
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
