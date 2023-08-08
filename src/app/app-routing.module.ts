import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NftsComponent } from './nfts/nfts.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'pages', 
    pathMatch: 'full'
  },
  {
    path: 'pages',
    component: SideNavComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'nfts',
        component: NftsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
