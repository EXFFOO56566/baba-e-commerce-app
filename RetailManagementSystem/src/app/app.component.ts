import { Component, QueryList, ViewChildren } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { MenuController, NavController } from '@ionic/angular';
import { ConfigService } from './providers/config.service';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { BackButtonService } from './providers/back-button.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;

  constructor(public backButtonExit: BackButtonService,
    public menu: MenuController, public navCtrl: NavController, public config: ConfigService, private platform: Platform,
  ) {
    setTimeout(() => {
      SplashScreen.hide({
        fadeOutDuration: 1000
      });
    }, 1000)
    this.initializedApp();
  }

  ngAfterViewInit() {
    this.backButtonExit.routerOutlets = this.routerOutlets;
    this.backButtonExit.backButtonEvent();
  }

  initializedApp() {
    this.navCtrl.navigateRoot("home1");
  }
}
