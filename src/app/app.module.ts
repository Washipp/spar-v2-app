import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TotalSaveUpComponent } from './total-save-up/total-save-up.component';
import { SaveUpComponent } from './save-up/save-up.component';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { RouterModule, Routes} from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { AccountDbService } from './services/account-db.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: 'home', component: TotalSaveUpComponent },
  { path: 'save', component: SaveUpComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: TotalSaveUpComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TotalSaveUpComponent,
    SaveUpComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CurrencyMaskModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AccountDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
