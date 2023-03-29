import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { MenuController, NavController } from '@ionic/angular';
import { ConfigService } from './providers/config.service';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { BackButtonService } from './providers/back-button.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // @ViewChild(IonRouterOutlet, { static: true }) routerOutlets: IonRouterOutlet;

  // For Side Menu Data
  public appPages = [
    { title: this.config.language.Shop, url: '/shop', icon: 'mail' },
    { title: this.config.language.News, url: '/news', icon: 'paper-plane' },
    { title: this.config.language.ContactUs, url: '/contact-us', icon: 'heart' },
    { title: this.config.language.AboutUs, url: '/about-us', icon: 'archive' },
    { title: this.config.language.Login, url: '/sign-in', icon: 'trash' },
    { title: this.config.language.BYCATEGORY },
    {
      title: this.config.language.Men, url: '', icon: 'heart', items: [
        {
          title: this.config.language.TShirt, url: '/shop', icon: 'heart'
        },
        { title: this.config.language.YellowShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.RedShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.LargeShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.ViewAll, url: '/shop', icon: 'heart' }
      ],
      expanded: false
    },
    {
      title: this.config.language.Clothing, url: '', icon: 'heart', items: [
        { title: this.config.language.TShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.YellowShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.RedShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.LargeShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.ViewAll, url: '/shop', icon: 'heart' }
      ],
      expanded: false
    },
    {
      title: this.config.language.Women, url: '', icon: 'heart', items: [
        { title: this.config.language.TShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.YellowShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.RedShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.LargeShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.ViewAll, url: '/shop', icon: 'heart' }
      ],
      expanded: false
    },
    {
      title: this.config.language.Shirts, url: '', icon: 'heart', items: [
        { title: this.config.language.TShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.YellowShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.RedShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.LargeShirt, url: '/shop', icon: 'heart' },
        { title: this.config.language.ViewAll, url: '/shop', icon: 'heart' }
      ],
      expanded: false
    },
  ];

  constructor(public backButtonExit: BackButtonService,
    public menu: MenuController, public navCtrl: NavController, public config: ConfigService, private platform: Platform,
  ) {
    // this.platform.backButton.subscribeWithPriority(-1, () => {
    //   if (!this.routerOutlets.canGoBack()) {
    //     App.exitApp();
    //   }
    // });
    setTimeout(() => {
      SplashScreen.hide({
        fadeOutDuration: 1000
      });
    }, 1000)
    this.initializedApp();
  }

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  ngAfterViewInit() {
    this.backButtonExit.routerOutlets = this.routerOutlets;
    this.backButtonExit.backButtonEvent();
  }

  initializedApp() {
    this.navCtrl.navigateRoot("intro-screens");
  }

  // For Expand
  expandItem(i) {
    if (i.expanded == false) i.expanded = true;
    else i.expanded = false;
  }

  openPage(page) {
    if (!page) {
      return;
    }
    this.navCtrl.navigateForward(page);
    this.menu.toggle();
  }
}
