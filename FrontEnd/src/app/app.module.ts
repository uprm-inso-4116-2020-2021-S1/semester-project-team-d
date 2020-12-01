import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module'
import { AppComponent } from './app.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserService } from './services/user/user.service';
import { NavTabComponent } from './components/nav-bar/nav-tab/nav-tab.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { BrowseBooksPageComponent } from './pages/browse-books-page/browse-books-page.component';
import { BookPageComponent } from './pages/book-page/book-page/book-page.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarComponent,
    NavTabComponent,
    BookCardComponent,
    CarouselComponent,
    HomePageComponent,
    BookFormComponent,
    FooterComponent,
    AccountPageComponent,
    BrowseBooksPageComponent,
    BookPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
