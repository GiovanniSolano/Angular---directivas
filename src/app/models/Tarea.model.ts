export class Tarea {

    titulo: string;
    descripcion: string;
    completada: boolean;

    constructor(pTitulo = '', pDescripcion = '', pComletada = false) {

        this.titulo = pTitulo;
        this.descripcion = pDescripcion;
        this.completada = pComletada;

    }

}