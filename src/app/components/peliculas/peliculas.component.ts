import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PeliculaService } from 'src/app/Services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  constructor(private _service : PeliculaService, private _activeRoute:ActivatedRoute) { }

  public peliculas! :any;
  public idGenero!: string;
  public idNacionalidad! : string;


  ngOnInit(): void {
    
    this._activeRoute.params.subscribe((params:Params) => {
      if (params["filtro"] == "genero") {
        this._service.getPeliculaById(params['query']).subscribe(response=>{
          this.peliculas = response;
        });
      }
    }
    )


  }

}
