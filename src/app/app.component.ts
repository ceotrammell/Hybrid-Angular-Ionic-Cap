import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { MenuController, Platform, ToastController } from '@ionic/angular';
import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { Storage } from '@ionic/storage-angular';
import { UserData } from './providers/user-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Schedule',
      url: '/app/tabs/schedule',
      icon: 'calendar'
    },
    {
      title: 'Speakers',
      url: '/app/tabs/speakers',
      icon: 'people'
    },
    {
      title: 'Map',
      url: '/app/tabs/map',
      icon: 'map'
    },
    {
      title: 'About',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ];
  loggedIn = false;
  dark = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    this.listenForLoginEvents();

    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(async (event) => {
        if (event.type === 'VERSION_READY') {
          const toast = await this.toastCtrl.create({
            message: 'Update available!',
            position: 'bottom',
            buttons: [
              {
                role: 'cancel',
                text: 'Reload'
              }
            ]
          });

          await toast.present();

          toast
            .onDidDismiss()
            .then(() => this.swUpdate.activateUpdate())
            .then(() => window.location.reload());
        }
      });
    }
  }

  async initializeApp() {
    await this.platform.ready();
    await this.storage.create(); // Ensure storage is created first
    if (this.platform.is('hybrid')) {
      StatusBar.hide();
      SplashScreen.hide();
    }
    await this.checkLoginStatus(); // Check login status after storage is created
  }

  async checkLoginStatus() {
    const loggedIn = await this.userData.isLoggedIn();
    this.updateLoggedInStatus(loggedIn);
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  async logout() {
    await this.userData.logout();
    await this.router.navigateByUrl('/app/tabs/schedule');
  }

  async openTutorial() {
    this.menu.enable(false);
    await this.storage.set('ion_did_tutorial', false);
    await this.router.navigateByUrl('/tutorial');
  }
}
