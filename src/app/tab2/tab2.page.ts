import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../model/usuario';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
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
    private camera: Camera,
    protected router: Router,
    protected activedRoute: ActivatedRoute,
    protected alertController: AlertController
  ) { }

  ngOnInit() {
  }
  
  onsubmit(form) {
    if (!this.preview) {
      this.presentAlert("Ops!", "Tire sua foto!")
    } else {
      this.usuario.foto = this.preview;
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

  tirarFoto() {
  
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
  
}
  