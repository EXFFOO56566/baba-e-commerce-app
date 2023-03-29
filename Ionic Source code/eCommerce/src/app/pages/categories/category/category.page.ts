import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { ConfigService } from 'src/app/providers/config.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  style = 9;
  showOption: any = false;
  changesToCalled = { role: "" };
  public appPages = [
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
  constructor(public popoverController: PopoverController, public config: ConfigService, public navCtrl: NavController) { }

  ngOnInit() {
  }

  async selectCatStyle(ev) {
    this.changesToCalled = { role: "true" };
    if (ev.detail.value == "1") {
      this.style = 1;
    }
    else if (ev.detail.value == "2") {
      this.style = 2;
    }
    else if (ev.detail.value == "3") {
      this.style = 3;
    }
    else if (ev.detail.value == "4") {
      this.style = 4;
    }
    else if (ev.detail.value == "5") {
      this.style = 5;
    }
    else if (ev.detail.value == "6") {
      this.style = 6;
    }
    else if (ev.detail.value == "7") {
      this.style = 7;
    }
    else if (ev.detail.value == "8") {
      this.style = 8;
    }
    else if (ev.detail.value == "9") {
      this.style = 9;
    }
    else {
      this.style = 10;
    }
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
  }
}
