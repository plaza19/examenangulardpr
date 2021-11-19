import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Global from "../Global";

@Injectable()

export class PeliculaService {

    constructor(private _http: HttpClient) {

    }
   
    getAllGeneros() {
        var request = "/api/Generos";
        var url = Global.urlApiPeliculas + request;

        return this._http.get(url);
    }

    getAllNacionalidades() {
        var request = "/api/Nacionalidades";
        var url = Global.urlApiPeliculas + request;

        return this._http.get(url);
    }

    getPeliculasByGenero(genero:string) {
        var request = "/api/Peliculas/PeliculasGenero/" + genero;
        var url = Global.urlApiPeliculas + request;

        return this._http.get(url);
    }

    getPeliculasByNacionalidad(nacionalidad:string) {
        var request = "/api/Peliculas/PeliculasNacionalidad/" + nacionalidad;
        var url = Global.urlApiPeliculas + request;

        return this._http.get(url);
    }

    cargarPelicula(idPelicula:string) {
        var request = "/api/Peliculas/" + idPelicula;
        var url = Global.urlApiPeliculas + request;

        return this._http.get(url);
    }

    eliminarPelicula(idPelicula:string) {
        var request = "/api/Peliculas/" + idPelicula;
        var url = Global.urlApiPeliculas + request;

        return this._http.delete(url);
    }

    buscarPelicula(nombre:string) {
        var request = "/api/Peliculas/BuscadorPeliculas/" + nombre;
        var url = Global.urlApiPeliculas + request;

        return this._http.get(url);
    }

    getPeliculaById(idPelicula:string) {
        var request = "/api/Peliculas/" + idPelicula;
        var url = Global.urlApiPeliculas + request;

        return this._http.get(url);
        
    }

    // modificarGenero(idPelicula:string, idgenero:string) {
    //     var request = "/api/Peliculas/UpdatePeliculaGenero/" + idPelicula +"/" + idgenero;
    //     var url = Global.urlApiPeliculas + request;

    //     return this._http.put(url);
    // }

    getGeneroname(idGenero:string) {

        var request = "/api/Generos/" + idGenero;
        var url = Global.urlApiPeliculas + request;

        return this._http.get(url);
    }

}