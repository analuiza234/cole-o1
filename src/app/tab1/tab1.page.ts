import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  protected usuario: Usuario = new Usuario;
  protected id: string = null;


  constructor(
    protected UsuarioService: UsuarioService) {
   }

  ngOnInit() {
  }

}
