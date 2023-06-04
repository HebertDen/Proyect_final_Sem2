import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent  implements OnInit {

  public form!: FormGroup;
  public producto = new Producto();
  public nombre: string = '';
  public precio: number = 0;
  public detalle: string = '';
  public categoria: number = 0;
  public categorias!: Array<Categoria>;

  constructor(
    private route: Router,
    public productoService: ProductoService,
    public categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.categories();
    this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(9)
      ]),
      precio: new FormControl('', [
        Validators.required
      ]),
      detalle: new FormControl('', [
        Validators.maxLength(500)
      ]),
      categoria: new FormControl('', [
        Validators.required
      ]),
    });
  }

  categories(){
    this.categoriaService.doGetAll().then((res: any) => {
      this.categorias = res.data;
    });
  }

  onCreate(){
    this.producto.nombre = this.nombre;
    this.producto.precio = this.precio;
    this.producto.detalle = this.detalle;
    this.producto.categoria = Number(this.categoria);
    console.log(this.producto);
    this.productoService.doPost(this.producto).then((res: any) => {
      console.log('Info: ', res );
    });
    this.route.navigate(['/products']);
  }

}
