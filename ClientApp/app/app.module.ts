import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { UserTableComponent } from './components/table/user-table.component';
import { UserSummaryComponent } from './components/user-summary/user-summary.component';
import { ModalComponent } from './components/shared/modal-popup/modal-popup.component';
import { UserService } from './components/shared/user-service';
import { MyFilterPipe } from './components/shared/filter';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        UserTableComponent,
        UserSummaryComponent,
        ModalComponent,
        MyFilterPipe
    ],
    imports: [
        FormsModule,
        CommonModule,
        UniversalModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ UserService ]
})
export class AppModule {
}
