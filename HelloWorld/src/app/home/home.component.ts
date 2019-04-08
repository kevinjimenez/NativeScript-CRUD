import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(
        private _routerExtensions: RouterExtensions
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    irATabs() {
        this._routerExtensions
            .navigate(
                [
                    'tabs',
                    {
                        outlets:
                        {
                            home: ['tab1']
                        }
                    }
                ],
                {
                    transition: { name: 'slideLeft' }
                });
    }
}
