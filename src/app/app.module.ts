import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DataService} from "./services/data.service";
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';

import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from './dashboard/dashboard.component';
import {ContentViewerComponent} from './content-viewer/content-viewer.component';
import {SafePipe} from "./pipes/safe.pipe";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'test/:id', component: ContentViewerComponent},
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DashboardComponent,
    ContentViewerComponent,
    SafePipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
