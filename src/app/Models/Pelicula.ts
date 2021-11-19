export class Pelicula {

    public idPelicula: number;

    public idDistribuidor: number;

    public idGenero: number;

    public titulo: string;

    public idNacionalidad: number;

    public argumento: string;

    public foto: string;

    public fechaEstreno: string;

    public actores: string;

    public director: string;

    public duracion: number;

    public precio: number;

    public youTube: string;

    public enlaceVideo: string;

  constructor(
    idPelicula: number,

    idDistribuidor: number,

    idGenero: number,

    titulo: string,

    idNacionalidad: number,

    argumento: string,

    foto: string,

    fechaEstreno: string,

    actores: string,

    director: string,

    duracion: number,

    precio: number,

    youTube: string,

    enlaceVideo: string
  ) {

    this.idPelicula = idPelicula;
    this.idDistribuidor = idDistribuidor;
    this.idGenero = idGenero;
    this.titulo = titulo;
    this.idNacionalidad = idNacionalidad;
    this.argumento = argumento;
    this.foto = foto;
    this.fechaEstreno = fechaEstreno;
    this.actores = actores;
    this.director = director;
    this.duracion = duracion;
    this.precio = precio;
    this.youTube = youTube;
    this.enlaceVideo = enlaceVideo;

  }
}
