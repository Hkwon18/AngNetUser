import { Component } from '@angular/core';

@Component ({
    selector: 'header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    name: string;

    constructor() {
        this.name = 'Users';
    }
}