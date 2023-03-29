import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  darkMode: any = false;
  userInfo: any = [{ name: this.config.language.Profile, icon: 'person-circle', url: '/edit-profile' }, { name: this.config.language.Login, icon: 'log-in', url: '/sign-in' }, { name: this.config.language.LogOut, icon: 'log-out' }];

  detailInfo: any = [{ name: this.config.language.CustomizeTheme, icon: 'create', url: '/demo-settings' }, { name: this.config.language.MyWishlist, icon: 'heart', url: '/wish-list' },
  { name: this.config.language.MyOrders, icon: 'briefcase', url: '/my-orders' },
  { name: this.config.language.Address, icon: 'person-add', url: '/add-address' }, { name: this.config.language.ContactUs, icon: 'call', url: '/contact-us' },
  { name: this.config.language.PrivacyPolice, icon: 'person', url: '/privacy-policy' }, { name: this.config.language.TermAndCondition, icon: 'document', url: '/term-conditions' }, { name: this.config.language.AboutUs, icon: 'information-circle', url: '/about-us' },
  { name: this.config.language.RateTheApp, icon: 'star' }, { name: this.config.language.IntroScreen, icon: 'tablet-landscape', url: '/intro-screens' }
  ];
  // { name: this.config.language.Language, icon: 'earth', desc: this.config.language.English }, { name: this.config.language.Currency, icon: 'logo-usd', desc: 'INR $' },
  // { name: this.config.language.Theme, icon: 'invert-mode', desc: this.config.language.Light },
  constructor(public navCtrl: NavController, public config: ConfigService) { }

  ngOnInit() {
    if (this.config.darkMode == 'true') {
      this.darkMode = true;
    }
    else {
      this.darkMode = false;
    }
  }
  // showPage(data) {
  //   this.navCtrl.navigateForward("/sign-in");
  // }

  changeDarkMode(event) {
    console.log("event", event);
    if (event.detail.checked) {
      console.log("In dark",);
      this.config.darkMode = 'true';
      localStorage.mode = 'true';
      this.darkMode = true;

    }
    else {
      console.log("In light",);
      this.config.darkMode = 'false';
      localStorage.mode = 'false';
      this.darkMode = false;
    }
  }
}
