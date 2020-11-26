import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { BrowseBooksPageComponent } from './pages/browse-books-page/browse-books-page.component';
import { BookPageComponent } from './pages/book-page/book-page/book-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: '', component: LandingPageComponent },

  { path: 'home', component: HomePageComponent },
  { path: 'account', component: AccountPageComponent },
  { path: 'browse/:type', component: BrowseBooksPageComponent},

  { path: 'book/:id', component: BookPageComponent},

  { path: 'landing', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginPageComponent,
  RegisterPageComponent,
  LandingPageComponent,
  HomePageComponent,
  AccountPageComponent,
  BrowseBooksPageComponent
]