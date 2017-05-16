import { Component, Input } from '@angular/core';
import { User } from '../shared/user-type';

@Component({
    selector: 'user-summary',
    templateUrl: './user-summary.component.html',
    styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent {
    @Input() user: User;
}
