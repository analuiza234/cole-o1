import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'add-usuario', loadChildren: './pages/add-usuario/add-usuario.module#AddUsuarioPageModule' },
  { path: 'list-usuario', loadChildren: './pages/list-usuario/list-usuario.module#ListUsuarioPageModule' },
  { path: 'perfil-usuario', loadChildren: './pages/perfil-usuario/perfil-usuario.module#PerfilUsuarioPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
