import { Component, Output, EventEmitter } from '@angular/core';
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

    @Output() onAddClicked: EventEmitter<User> = new EventEmitter<User>();

    constructor() {
        this.selectedUser = new User();
        this.onAddClicked.emit(this.selectedUser);
    }

    public showUser(user: User): void {
        this.selectedUser = user;
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
    }

    public showNoUser(): void {
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
        this.selectedUser = new User();
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

    public AddUser(user: User) {
        this.onAddClicked.emit(user);
        this.hide();
    }
}