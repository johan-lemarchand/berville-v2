import {Component, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink, RouterOutlet, RouterLinkActive} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatButtonModule,
        NgIf,
        MatIconModule,
        RouterLink,
        RouterOutlet,
        RouterLinkActive,
    ]
})

export class HeaderComponent {

    constructor(
    ) {
    }

    toggleNavigation(): void
    {
    }
}
