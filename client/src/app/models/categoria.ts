export class Categoria {
    public id!: number;
    public nombre: string = '';

    setValues(data: any){
        this.id = data.id;
        this.nombre = data.nombre;
    }

}
