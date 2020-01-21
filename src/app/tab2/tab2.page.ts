import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../model/usuario';
import { Firebase } from '@ionic-native/firebase/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  
  protected usuario: Usuario = new Usuario;
  protected id: string = null;
  protected preview: string = null;


   
  
  constructor(
    protected usuarioService: UsuarioService,
  
    protected router: Router,
    protected activedRoute: ActivatedRoute,
    protected alertController: AlertController
  ) { }

  ngOnInit() {
  }
  
  onsubmit(form) {
      if (this.id) {
        this.usuarioService.update(this.usuario, this.id).then(
          res => {
            this.presentAlert("Aviso", "Atualizado!");
            form.reset();
            this.usuario = new Usuario;
            this.router.navigate(['/tabs/listUsuario']);
          },
          erro => {
            console.log("Erro: " + erro);
            this.presentAlert("Erro", "Erro ao atualizar!");
          }
        )
      } else {
        this.usuarioService.save(this.usuario).then(
          res => {
            this.presentAlert("Aviso", "Cadastrado!");
            form.reset();
            this.usuario = new Usuario;
            this.router.navigate(['/tabs/listUsuario']);
          },
          erro => {
            console.log("Erro: " + erro);
            this.presentAlert("Erro", "Erro ao cadastrar!");
          }
        )
      }
  
  }
  async presentAlert(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }

  
}
  