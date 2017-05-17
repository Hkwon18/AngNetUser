import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user-type';

@Pipe({
    name: 'myfilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: User[], term: any): any {
        //See all Threads
        if (!term) {
            return items;
        }
        //See selected Units only
        if (term) {
            return items.filter(user => {
                return user.firstName.toLocaleLowerCase().includes(term.toLowerCase()) ||
                    user.lastName.toLocaleLowerCase().includes(term.toLowerCase()) ||
                    user.userName.toLocaleLowerCase().includes(term.toLowerCase()) ||
                    user.email.toLocaleLowerCase().includes(term.toLowerCase()) ;
            });
        }
    }
}