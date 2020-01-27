import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/model/usuario';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  
  usuarios: Usuario;
  protected usuario: Usuario = new Usuario;
  protected id: string = null;

  constructor(
    protected activatedRoute:ActivatedRoute,
    protected usuarioService: UsuarioService
  ) { }

  ngOnInit() {
   
  }
  
}
