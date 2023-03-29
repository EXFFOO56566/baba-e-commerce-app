import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';
import { arLang, engLang } from 'src/app/providers/gLJson';
import { SharedDataService } from 'src/app/providers/shared-data.service';

@Component({
  selector: 'app-demo-settings',
  templateUrl: './demo-settings.page.html',
  styleUrls: ['./demo-settings.page.scss'],
})
export class DemoSettingsPage implements OnInit {

  homePage: any = '1';

  colors = [
    { value: '#3498db', name: 'default' },
    { value: '#FFB757', name: 'default1' },
    { value: '#344955', name: 'default2' },
    { value: '#F15A24', name: 'default3' },
    { value: '#6200EE', name: 'default4' },

    { value: '#3E87E7', name: 'default5' },
    { value: '#d65a31', name: 'default6' },

    { value: '#E85C9E', name: 'default7' },
    { value: '#004FBD', name: 'default8' },
    { value: '#F6BB45', name: 'default9' },

    { value: '#186CDA', name: 'default10' },
    { value: '#BF69EA', name: 'default11' },
    { value: '#5D1049', name: 'default12' },
    { value: '#ff8a80', name: 'default13' },
    { value: '#b22222', name: 'default14' },
    { value: '#8b0000', name: 'default15' },

  ]

  themeModes = [
    { value: '#e8e8e8', name: 'ligth' },
    { value: '#000000', name: 'dark' },
  ]

  selectLang: any = 'English'

  constructor(public config: ConfigService, public navCtrl: NavController, public shared: SharedDataService) {
    if (localStorage.direction == "ltr") {
      this.selectLang = "English";
    }
    else {
      this.selectLang = "Arabic";
    }
  }

  ngOnInit() {
  }

  changeAppTheme(val) {
    this.config.appTheme = val;
    localStorage.theme = val;
  }

  changeAppMode(val) {
    if (val == 'ligth') {
      this.config.darkMode = 'false';
      localStorage.mode = 'false';

    }
    else {
      this.config.darkMode = 'true';
      localStorage.mode = 'true';
    }
  }

  selectHomeStyle(ev) {
    if (ev.detail.value == "1") {
      this.config.homePage = 1;
      localStorage.home = 1;
      this.shared.getAllMethods();
      this.navCtrl.navigateRoot('tabs/home1');

    }
    else if (ev.detail.value == "2") {
      this.config.homePage = 2;
      localStorage.home = 2;
      this.shared.getAllMethods();
      this.navCtrl.navigateRoot('tabs/home2');
    }
    else if (ev.detail.value == "3") {
      this.config.homePage = 3;
      localStorage.home = 3;
      this.shared.getAllMethods();

      this.navCtrl.navigateRoot('tabs/home3');
    }
    else if (ev.detail.value == "4") {
      this.config.homePage = 4;
      localStorage.home = 4;
      this.shared.getAllMethods();
      this.navCtrl.navigateRoot('tabs/home4');
    }
    else if (ev.detail.value == "5") {
      this.config.homePage = 5;
      localStorage.home = 5;
      this.shared.getAllMethods();
      this.navCtrl.navigateRoot('tabs/home5');
    }
    else if (ev.detail.value == "6") {
      this.config.homePage = 6;
      localStorage.home = 6;
      this.shared.getAllMethods();
      this.navCtrl.navigateRoot('tabs/home6');
    }
    else if (ev.detail.value == "7") {
      this.config.homePage = 7;
      localStorage.home = 7;
      this.shared.getAllMethods();

      this.navCtrl.navigateRoot('tabs/home7');
    }
    else if (ev.detail.value == "8") {
      this.config.homePage = 8;
      localStorage.home = 8;
      this.shared.getAllMethods();
      this.navCtrl.navigateRoot('tabs/home8');
    }
    else if (ev.detail.value == "9") {
      this.config.homePage = 9;
      localStorage.home = 9;
      this.shared.getAllMethods();
      this.navCtrl.navigateRoot('tabs/home9');
    }
    else {
      this.config.homePage = 10;
      localStorage.home = 10;
      this.shared.getAllMethods();
      this.navCtrl.navigateRoot('tabs/home10');
    }
  }

  selectCardStyle(ev) {
    if (ev.detail.value == "1") {
      this.config.card = 1;
      localStorage.card = 1;
    }
    else if (ev.detail.value == "2") {
      this.config.card = 2;
      localStorage.card = 2;
    }
    else if (ev.detail.value == "3") {
      this.config.card = 3;
      localStorage.card = 3;
    }
    else if (ev.detail.value == "4") {
      this.config.card = 4;
      localStorage.card = 4;
    }
    else if (ev.detail.value == "5") {
      this.config.card = 5;
      localStorage.card = 5;
    }
    else if (ev.detail.value == "6") {
      this.config.card = 6;
      localStorage.card = 6;
    }
    else if (ev.detail.value == "7") {
      this.config.card = 7;
      localStorage.card = 7;
    }
    else if (ev.detail.value == "8") {
      this.config.card = 8;
      localStorage.card = 8;
    }
    else if (ev.detail.value == "9") {
      this.config.card = 9;
      localStorage.card = 9;
    }
    else {
      this.config.card = 10;
      localStorage.card = 10;
    }
  }

  languageChange() {
    if (this.selectLang == 'English') {
      this.selectLang = "English";
      this.config.language = engLang;
      localStorage.lang = JSON.stringify(this.config.language);
      localStorage.direction = "ltr";
    }
    else {
      this.selectLang = "Arabic";
      this.config.language = arLang;
      localStorage.lang = JSON.stringify(this.config.language);
      localStorage.direction = "rtl";
    }
    setTimeout(() => {
      window.location.reload();
    }, 900);
  }
}
