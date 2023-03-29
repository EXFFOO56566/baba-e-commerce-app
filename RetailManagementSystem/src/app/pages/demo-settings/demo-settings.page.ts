import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
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

  constructor(public config: ConfigService, public navCtrl: NavController, public shared: SharedDataService, private modalController: ModalController) {
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

  // For Modal Dismiss
  dismiss() {
    this.modalController.dismiss({
    });
  }
}
