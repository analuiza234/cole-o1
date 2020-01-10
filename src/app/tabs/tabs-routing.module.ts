import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'addUsuario',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-usuario/add-usuario.module').then(m => m.AddUsuarioPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'addUsuario/:id',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/add-usuario/add-usuario.module').then(m => m.AddUsuarioPageModule)
          }
        ]
      },
      {
        path: 'listUsuario',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../pages/list-usuario/list-usuario.module').then(m => m.ListUsuarioPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'perfilUsuario/:id',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/perfil-usuario/perfil-usuario.module').then(m => m.PerfilUsuarioPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
