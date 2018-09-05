import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SallesPage } from '../pages/salles/salles';
import { CommunautePage } from '../pages/communaute/communaute';
import { EventsPage } from '../pages/events/events';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ServicesPage } from '../pages/services/services';
import { AnnoncesPage } from '../pages/annonces/annonces';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Reservation', component: HomePage },
      { title: 'Nos salles', component: SallesPage },
      { title: 'Nos services', component: ServicesPage },
      { title: 'Communaute', component: CommunautePage },
      { title: 'Annonces', component: AnnoncesPage },

      { title: 'Evènements', component: EventsPage },
      { title: 'Qui sommes-nous ?', component: AboutPage },
      { title: 'Contact', component: ContactPage },



    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
