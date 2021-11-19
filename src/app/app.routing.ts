import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";

const appRoutes : Routes = [
    {path:"", component: HomeComponent},
    {path:"peliculas/:filtro/:query", component: PeliculasComponent}

]

export const appRoutingProviders: any[] = [];
export const Routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

