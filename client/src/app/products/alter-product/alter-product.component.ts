import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Producto } from 'src/app/models/producto';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-alter-product',
  templateUrl: './alter-product.component.html',
  styleUrls: ['./alter-product.component.scss'],
})
export class AlterProductComponent  implements OnInit {

  public form!: FormGroup;
  public nombre: string = '';
  public precio: number = 0;
  public detalle: string = '';
  public categoria: number = 0;
  public categorias: Array<Categoria> = [];
  public producto: Producto = new Producto();
  public id: string = '';

  constructor(
    public route: Router,
    public router: ActivatedRoute,
    public productoService: ProductoService,
    public categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id') || '';
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
    this.productoService.doGet(this.id).then((res: any) => {
      this.producto = res.data;
    });
    this.categoriaService.doGetAll().then((res: any) => {
      this.categorias = res.data;
    });
  }

  onUpdate(){
    this.producto.nombre = this.nombre;
    this.producto.precio = this.precio;
    this.producto.detalle = this.detalle;
    console.log(this.producto);
    this.producto.categoria = Number(this.categoria);
    console.log(this.producto);
    this.productoService.doPut(this.producto, this.producto.id).then((res: any) => {
      if(res.status === '200'){
        console.log('Actualizado: ', res.status);
      } else {
        console.log('Estado: ', res.status);
        console.log('Mensaje: ', res.error.message);
      }
    });
    this.route.navigate(['/products']);
  }

}
