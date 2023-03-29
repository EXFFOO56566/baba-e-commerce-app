import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import { DxChartComponent, DxCircularGaugeComponent, DxPieChartComponent } from 'devextreme-angular';
import { ConfigService } from 'src/app/providers/config.service';
import { arLang } from 'src/app/providers/gLJson';
import { SharedDataService } from 'src/app/providers/shared-data.service';
import { DemoSettingsPage } from '../../demo-settings/demo-settings.page';


@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {
  data = [{
    day: '0-1',
    saleValue: 2000,
    saleCount: 10
  }, {
    day: '2-3',
    saleValue: 4000,
    saleCount: 15
  }, {
    day: '4-5',
    saleValue: 6000,
    saleCount: 3
  }, {
    day: '6-7',
    saleValue: 8000,
    saleCount: 5
  }, {
    day: '8-9',
    saleValue: 10000,
    saleCount: 50
  }, {
    day: '10-11',
    saleValue: 12000,
    saleCount: 15
  }, {
    day: '12-13',
    saleValue: 15000,
    saleCount: 20
  }, {
    day: '14-15',
    saleValue: 20000,
    saleCount: 50
  }, {
    day: '16-17',
    saleValue: 1000,
    saleCount: 10
  }, {
    day: '18-19',
    saleValue: 6000,
    saleCount: 2
  }, {
    day: '20-21',
    saleValue: 7000,
    saleCount: 25
  }, {
    day: '22-23',
    saleValue: 1000,
    saleCount: 5
  }];

  topCategory = [{
    category: 'Drinks',
    percent: 55.5,
  }, {
    category: 'Bakery',
    percent: 4.0,
  }, {
    category: 'Dairy',
    percent: 4.3,
  }, {
    category: 'Ice Cream',
    percent: 4.9,
  }];

  saleTransaction = [
    {
      day: 'Monday',
      void: 5,
      hold: 10,
      retrieve: 20
    },
    {
      day: 'Tuesday',
      void: 5,
      hold: 10,
      retrieve: 20
    },
    {
      day: 'Wednesday',
      void: 5,
      hold: 10,
      retrieve: 20
    },
    {
      day: 'Thursday',
      void: 5,
      hold: 10,
      retrieve: 20
    },
    {
      day: 'Friday',
      void: 5,
      hold: 10,
      retrieve: 20
    },
    {
      day: 'Saturday',
      void: 5,
      hold: 10,
      retrieve: 20
    },
    {
      day: 'Sunday',
      void: 5,
      hold: 10,
      retrieve: 20
    }
  ]

  topItems = [
    {
      img: 'assets/marinda.jpg',
      name: 'Marinda Drink 250 ML',
    },
    {
      img: 'assets/ice.jpg',
      name: 'Ice-Cream Strawberry',
    },
    {
      img: 'assets/pizza.jpg',
      name: 'Pizaa Tikka Large',
    },
    {
      img: 'assets/burger.jpg',
      name: 'Spicy Hot Deal',
    }
  ];

  segmentss: any = 'dashboard';

  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChildren(DxChartComponent) dxCharts: QueryList<DxChartComponent>   // For Chart Query List For Render Resize
  @ViewChildren(DxPieChartComponent) dxPieCharts: QueryList<DxPieChartComponent>
  @ViewChildren(DxCircularGaugeComponent) dxCircular: QueryList<DxCircularGaugeComponent>

  segments: any = this.config.language.Today;
  scrollTopButton = false;//for scroll down fab 
  // For Product Slider Configurations
  sliderConfig = {
    slidesPerView: 4.5,
    spaceBetween: 10
  }
  constructor(public shared: SharedDataService, public navCtrl: NavController, private router: Router,
    private modalController: ModalController, public config: ConfigService) {
  }

  ngOnInit() {
    this.redrawCharts();
    this.redrawPieCharts();
    this.redrawCircularGauge();
  }

  ionViewWillEnter() {
    this.redrawCharts();
    this.redrawPieCharts();
    this.redrawCircularGauge();
    this.segmentss = 'dashboard';
  }

  // For FAB Scroll
  onScroll(e) {
    if (e.detail.scrollTop >= 500) {
      this.scrollTopButton = true;
    }
    if (e.detail.scrollTop < 500) {
      this.scrollTopButton = false;
    }
  }

  // For Scroll To Top Content
  scrollToTop() {
    this.content.scrollToTop(700);
    this.scrollTopButton = false;
  }

  async appSetting() {
    const modal = await this.modalController.create({
      component: DemoSettingsPage,
      // componentProps: { value: this.form.value },
      cssClass: 'democss',
      backdropDismiss: false
    });
    return await modal.present();
  }


  segmentChange(ev) {
    this.segments = ev.detail.value
    if (this.segments == this.config.language.TOday) {
    }
    else if (this.segments == this.config.language.ThisMonth) {
    }
    else {
    }

  }

  redrawCharts() {
    setTimeout(() => {
      this.dxCharts.forEach(function (chart) {
        chart.instance.render();
      });
    }, 250);
  }

  redrawPieCharts() {
    setTimeout(() => {
      this.dxPieCharts.forEach(function (chart) {
        chart.instance.render();
      });
    }, 250);
  }

  redrawCircularGauge() {
    setTimeout(() => {
      this.dxCircular.forEach(function (chart) {
        chart.instance.render();
      });
    }, 250);
  }
  customizeTooltips(arg: any) {
    return {
      text: arg.seriesName + ' ' + arg.value,
    };
  }

  // For Segment Change Mode (General/Touch)
  segmentChanged(evt) {
    if (evt.detail.value == 'pos') {
      this.router.navigateByUrl("/sales");
    }
  }
}
