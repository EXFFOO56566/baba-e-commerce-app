import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { RouterModule, Routes } from '@angular/router';

const productDetailPage = {
  path: 'product-detail/:id', loadChildren: () => import('../product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
};

const productsPage = {
  path: 'products/:id/:name/:type', loadChildren: () => import('../shop/shop.module').then(m => m.ShopPageModule)
};

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home1',
        children: [
          {
            path: '', loadChildren: () => import('../homes/home1/home1.module').then(m => m.Home1PageModule)
          },
          productDetailPage,
          productsPage
        ]
      },
      {
        path: 'home2',
        children: [
          {
            path: '', loadChildren: () => import('../homes/home2/home2.module').then(m => m.Home2PageModule)
          },
          productDetailPage,
          productsPage
        ]
      },
      {
        path: 'home3',
        children: [
          {
            path: '', loadChildren: () => import('../homes/home3/home3.module').then(m => m.Home3PageModule)
          },
          productDetailPage,
          productsPage
        ]
      },
      {
        path: 'home4',
        children: [
          {
            path: '', loadChildren: () => import('../homes/home4/home4.module').then(m => m.Home4PageModule)
          },
          productDetailPage,
          productsPage
        ]
      },
      {
        path: 'home5',
        children: [
          {
            path: '', loadChildren: () => import('../homes/home5/home5.module').then(m => m.Home5PageModule)
          },
          productDetailPage,
          productsPage
        ]
      },
      {
        path: 'home6',
        children: [
          {
            path: '', loadChildren: () => import('../homes/home6/home6.module').then(m => m.Home6PageModule)
          },
          productDetailPage,
          productsPage
        ]
      },
      {
        path: 'home7',
        children: [
          {
            path: '', loadChildren: () => import('../homes/home7/home7.module').then(m => m.Home7PageModule)
          },
          productDetailPage,
          productsPage
        ]
      },
      {
        path: 'home8',
        children: [
          {
            path: '', loadChildren: () => import('../homes/home8/home8.module').then(m => m.Home8PageModule)
          },
          productDetailPage,
          productsPage
        ]
      },
      {
        path: 'home9',
        children: [
          {
            path: '', loadChildren: () => import('../homes/home9/home9.module').then(m => m.Home9PageModule)
          },
          productDetailPage,
          productsPage
        ]
      },
      {
        path: 'home10',
        children: [
          {
            path: '', loadChildren: () => import('../homes/home10/home10.module').then(m => m.Home10PageModule)
          },
          productDetailPage,
          productsPage
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '', loadChildren: () => import('../categories/category/category.module').then(m => m.Category1PageModule)
          },
          productDetailPage, productsPage
        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '', loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
          },
          {
            path: 'order',
            data: {
              hideGuestLogin: false
            },
            loadChildren: () => import('../order-detail/order-detail.module').then(m => m.OrderDetailPageModule)
          },
          {
            path: 'shipping-method',
            data: {
              hideGuestLogin: false
            },
            loadChildren: () => import('../shipping-method/shipping-method.module').then(m => m.ShippingMethodPageModule)
          },
          {
            path: 'thank-you',

            data: {
              hideGuestLogin: false
            },
            loadChildren: () => import('../thank-you/thank-you.module').then(m => m.ThankYouPageModule)
          },
          // {
          //   path: 'billing-address',

          //   data: {
          //     hideGuestLogin: false
          //   },
          //   loadChildren: () => import('../address-pages/billing-address/billing-address.module').then(m => m.BillingAddressPageModule)
          // },
          {
            path: 'shipping-address',

            data: {
              hideGuestLogin: false
            },
            loadChildren: () => import('../shipping-address/shipping-address.module').then(m => m.ShippingAddressPageModule)
          },
          productDetailPage
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '', loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
          },
          productDetailPage,
          productsPage
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
          },
          {
            path: 'my-orders',

            loadChildren: () => import('../my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
          },
          {
            path: 'news', loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
          },
          {
            path: 'wish-list',

            loadChildren: () => import('../wish-list/wish-list.module').then(m => m.WishListPageModule)
          },
          {
            path: 'intro-screens', loadChildren: () => import('../intro-screens/intro-screens.module').then(m => m.IntroScreensPageModule)
          },
          {
            path: 'contact-us', loadChildren: () => import('../contact-us/contact-us.module').then(m => m.ContactUsPageModule)
          },
          {
            path: 'about-us', loadChildren: () => import('../about-us/about-us.module').then(m => m.AboutUsPageModule)
          },
          {
            path: 'sign-in', loadChildren: () => import('../sign-in/sign-in.module').then(m => m.SignInPageModule)
          },
          productDetailPage
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
