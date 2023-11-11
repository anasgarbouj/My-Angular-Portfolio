import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ManagePortfolioComponent } from './manage-portfolio/manage-portfolio.component';
import { AdminGuard } from './guards/admin/admin.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: SignInComponent },
  { path: 'manage-portfolio', component: ManagePortfolioComponent, canActivate: [AdminGuard] },

  { path: '**', pathMatch: 'full', redirectTo: '/home' }

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
