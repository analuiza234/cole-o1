import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  protected usuario: Usuario = new Usuario;
  protected id: string = null;

  constructor(
 protected usuarioService: UsuarioService
  ) { }

 

}
