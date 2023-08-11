import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NftsComponent } from './nfts/nfts.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PoolTableComponent } from './pool-table/pool-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideNavComponent,
    NftsComponent,
    HomeComponent,
    NavComponent,
    PoolTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgChartsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
