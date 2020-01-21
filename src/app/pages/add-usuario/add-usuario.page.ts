import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

import { Router, ActivatedRoute } from '@angular/router';


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
  
    protected router: Router,
    protected activedRoute: ActivatedRoute,
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
    


}