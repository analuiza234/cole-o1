import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router, ActivatedRoute } from '@angular/router';

//import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {
  img="";

  usuarios: any;
  presentAlert(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }
  preview: string;
  protected usuario:Usuario = new Usuario;
  protected id : string = null;


  constructor(
    protected usuarioService: UsuarioService,
    private camera: Camera,
    protected router: Router,
    protected activedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
  
  onsubmit(form) {
    if (!this.preview) {
      this.presentAlert("Ops!", "Tire sua foto!")
    } else {
      this.usuarios.foto = this.preview;
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

  tirarFoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.img = base64Image;
    }, (err) => {
      // Handle error
    });
  }
  
}
