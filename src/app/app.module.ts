import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SallesPage } from '../pages/salles/salles';
import { CommunautePage } from '../pages/communaute/communaute';
import { EventsPage } from '../pages/events/events';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ServicesPage } from '../pages/services/services';
import { AnnoncesPage } from '../pages/annonces/annonces';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SallesPage,
    CommunautePage,
    EventsPage,
    AboutPage,
    ContactPage,
    ServicesPage,
    AnnoncesPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SallesPage,
    CommunautePage,
    EventsPage,
    AboutPage,
    ContactPage,
    ServicesPage,
    AnnoncesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
