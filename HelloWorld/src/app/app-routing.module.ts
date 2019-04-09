import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Tab1Component } from "./tabs/tab1/tab1.component";
import { Tab2Component } from "./tabs/tab2/tab2.component";
import { Tab3Component } from "./tabs/tab3/tab3.component";

const routes: Routes = [
    // { path: "", redirectTo: "/home", pathMatch: "full" },
    // { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    // { path: "tabs", loadChildren: "~/app/tabs/tabs.module#TabsModule" }
    { path: "", redirectTo: "/(home:tab1//search:searcha//browse:browsea)", pathMatch: "full" },
    { path: "tab1", component: Tab1Component, outlet: "home" },
    { path: "searcha", component: Tab2Component, outlet: "search" },
    { path: "browsea", component: Tab3Component, outlet: "browse" },
    // { path: "homea", loadChildren: "~/app/tabs/tab1/tab1.module#Tab1Module", outlet: "home" },
    // { path: "searcha", loadChildren: "~/app/tabs/tab2/tab2.module#Tab2Module", outlet: "search" },
    // { path: "browsea", loadChildren: "~/app/tabs/tab3/tab3.module#Tab3Module", outlet: "browse" },
    // { path: "featureda", loadChildren: "~/app/home/home.module#HomeModule", outlet: "featured" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
