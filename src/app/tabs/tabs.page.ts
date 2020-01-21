import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
protected quantUsuario:number = 0;


  constructor(
    protected usuarioService:UsuarioService,
    protected alertController: AlertController,
    protected router: Router,
    protected activedRoute: ActivatedRoute,
    
   
  ) {
    //Quantidade de usuario
    this.usuarioService.getAll().subscribe(
      res=>{
        this.quantUsuario = res.length
      }
    );
    

  }

}