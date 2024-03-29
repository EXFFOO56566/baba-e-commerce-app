import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, NavController, ModalController, IonRouterOutlet, ToastController } from '@ionic/angular';
import { ConfigService } from './config.service';
import { SharedDataService } from './shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class BackButtonService {

  public routerOutlets: any;
  constructor(
    public router: Router,
    public shared: SharedDataService,
    public plt: Platform,
    public config: ConfigService,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {
  }

  // set up hardware back button event.
  currentUrl = ""
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  // active hardware back button
  backButtonEvent() {

    this.plt.backButton.subscribe(async () => {
      this.currentUrl = this.router.url
      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        }
        else {
          this.tryToCloseTheApp();
        }
      });
    });
  }

  async tryToCloseTheApp() {
    if (this.isRootUrl()) {
      this.navCtrl.navigateRoot("tabs/home" + localStorage.home);
    }
    else {
      navigator['app'].exitApp();
    }
  }
  isRootUrl() {
    console.log(this.currentUrl);
    if (this.currentUrl == '/tabs/cart') return true
    else if (this.currentUrl == '/tabs/search') return true
    else if (this.currentUrl == '/tabs/settings') return true
    else if (this.currentUrl == '/tabs/categories') return true
  }
  getCurrentTime() {
    return new Date().getTime();
  }
}
