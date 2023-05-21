import { Component } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public categorias: any[] = [];

  constructor(
    public categoriaServ: CategoriaService
  )
  {}

  ngOnInit(){
    this.categoriaServ.doGet().then((res) => {
      this.categorias = res.data;
    })
  }

}
