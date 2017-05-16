import { Component } from '@angular/core';
import { User } from '../user-type';

@Component({
    selector: 'modal-popup',
    templateUrl: './modal-popup.component.html',
    styles: ['.modal {background: rgba(0,0,0,0.6);}']
})

export class ModalComponent {

    public visible = false;
    private visibleAnimate = false;
    selectedUser: User;

    constructor() {
        this.selectedUser = new User();
    }

    public show(user: User): void {
        this.selectedUser = user;
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
    }

    public hide(): void {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }

    public onContainerClicked(event: MouseEvent): void {
        if ((<HTMLElement>event.target).classList.contains('modal')) {
            this.hide();
        }
    }
}