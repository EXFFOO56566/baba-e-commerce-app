import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home1',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./pages/homes/home1/home1.module').then(m => m.Home1PageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
  },
  {
    path: 'product-description',
    loadChildren: () => import('./pages/product-description/product-description.module').then(m => m.ProductDescriptionPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./pages/reviews/reviews.module').then(m => m.ReviewsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'shipping-address',
    loadChildren: () => import('./pages/shipping-address/shipping-address.module').then(m => m.ShippingAddressPageModule)
  },
  {
    path: 'shipping-method',
    loadChildren: () => import('./pages/shipping-method/shipping-method.module').then(m => m.ShippingMethodPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./pages/order-detail/order-detail.module').then(m => m.OrderDetailPageModule)
  },
  {
    path: 'thank-you',
    loadChildren: () => import('./pages/thank-you/thank-you.module').then(m => m.ThankYouPageModule)
  },
  {
    path: 'demo-settings',
    loadChildren: () => import('./pages/demo-settings/demo-settings.module').then(m => m.DemoSettingsPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./pages/homes/home2/home2.module').then(m => m.Home2PageModule)
  },
  {
    path: 'home3',
    loadChildren: () => import('./pages/homes/home3/home3.module').then(m => m.Home3PageModule)
  },
  {
    path: 'home4',
    loadChildren: () => import('./pages/homes/home4/home4.module').then(m => m.Home4PageModule)
  },
  {
    path: 'home5',
    loadChildren: () => import('./pages/homes/home5/home5.module').then(m => m.Home5PageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/categories/category/category.module').then(m => m.Category1PageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'term-conditions',
    loadChildren: () => import('./pages/term-conditions/term-conditions.module').then(m => m.TermConditionsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'wish-list',
    loadChildren: () => import('./pages/wish-list/wish-list.module').then(m => m.WishListPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'intro-screens',
    loadChildren: () => import('./pages/intro-screens/intro-screens.module').then(m => m.IntroScreensPageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./pages/my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'my-order-details/:id',
    loadChildren: () => import('./pages/my-order-details/my-order-details.module').then(m => m.MyOrderDetailsPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./pages/add-address/add-address.module').then(m => m.AddAddressPageModule)
  },
  {
    path: 'add-address-details',
    loadChildren: () => import('./pages/add-address-details/add-address-details.module').then(m => m.AddAddressDetailsPageModule)
  },
  {
    path: 'home6',
    loadChildren: () => import('./pages/homes/home6/home6.module').then( m => m.Home6PageModule)
  },
  {
    path: 'home7',
    loadChildren: () => import('./pages/homes/home7/home7.module').then( m => m.Home7PageModule)
  },
  {
    path: 'home8',
    loadChildren: () => import('./pages/homes/home8/home8.module').then( m => m.Home8PageModule)
  },
  {
    path: 'home9',
    loadChildren: () => import('./pages/homes/home9/home9.module').then( m => m.Home9PageModule)
  },
  {
    path: 'home10',
    loadChildren: () => import('./pages/homes/home10/home10.module').then( m => m.Home10PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
