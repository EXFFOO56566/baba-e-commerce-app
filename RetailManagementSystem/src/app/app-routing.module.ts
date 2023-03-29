import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home1',
    pathMatch: 'full'
  },
  {
    path: 'home1',
    loadChildren: () => import('./pages/homes/home1/home1.module').then(m => m.Home1PageModule)
  },
  {
    path: 'demo-settings',
    loadChildren: () => import('./pages/demo-settings/demo-settings.module').then(m => m.DemoSettingsPageModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('./pages/point-of-sale/sales/sales.module').then(m => m.SalesPageModule)
  },
  {
    path: 'price-check',
    loadChildren: () => import('./pages/point-of-sale/modals/price-check/price-check.module').then(m => m.PriceCheckPageModule)
  },
  {
    path: 'check-out',
    loadChildren: () => import('./pages/point-of-sale/modals/check-out/check-out.module').then(m => m.CheckOutPageModule)
  },
  {
    path: 'retrieve-sales',
    loadChildren: () => import('./pages/point-of-sale/modals/retrieve-sales/retrieve-sales.module').then(m => m.RetrieveSalesPageModule)
  },
  {
    path: 'item-category',
    loadChildren: () => import('./pages/point-of-sale/modals/item-category/item-category.module').then(m => m.ItemCategoryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
