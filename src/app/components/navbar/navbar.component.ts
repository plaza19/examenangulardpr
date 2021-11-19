import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/Models/Pelicula';
import { PeliculaService } from 'src/app/Services/peliculas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public generos!: any
  public nacionalidades!: any

  constructor(private _service : PeliculaService) { }


  ngOnInit(): void {

    this._service.getAllGeneros().subscribe(response=> {
      this.generos = response;
      console.log(this.generos);
      
    })

    this._service.getAllNacionalidades().subscribe(response=>{
      this.nacionalidades = response
    })


  }

}
