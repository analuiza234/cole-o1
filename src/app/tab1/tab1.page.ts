import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  protected usuario: Usuario = new Usuario;
  protected id: string = null;

constructor(
protected activatedRoute:ActivatedRoute,
protected usuarioService: UsuarioService,)
{}

ngOnInit() {
  this.id = this.activatedRoute.snapshot.paramMap.get("id");
  if (this.id) {
    this.usuarioService.get(this.id).subscribe(
      res => {
        this.usuario = res
      },
      erro => this.id = null
    )
  }
}

}
