import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './modules/auth/login-page/login-page.component';
import { ManagmentComponent } from './page/managment/managment.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HomepageComponent } from './page/homepage/homepage.component';
import { DashboardContentComponent } from '../../src/app/page/managment/dashboard-content/dashboard-content.component';
import { MyProfileInfoComponent } from '../app/page/managment/my-profile-info/my-profile-info.component';
import { TweetsComponent } from './page/managment/tweets/tweets.component';
import { RegisterPageComponent } from './modules/register-page/register-page.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
 
  {
    path: 'dashboard',
    component: ManagmentComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'users', component: DashboardContentComponent },
      { path: 'profile', component: MyProfileInfoComponent },
      { path: 'all-tweet', component: TweetsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default child route
    ],
  },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
