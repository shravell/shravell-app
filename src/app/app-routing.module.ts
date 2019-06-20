import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  { path: '', redirectTo: 'home/one', pathMatch: 'full' },
  { path: 'home', redirectTo: 'home/one', pathMatch: 'full' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'home', component: HomePage, children: [
    { path: 'one', loadChildren: './one/one.module#OnePageModule' },
    { path: 'two', loadChildren: './two/two.module#TwoPageModule' },
    { path: 'three', loadChildren: './three/three.module#ThreePageModule' }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
