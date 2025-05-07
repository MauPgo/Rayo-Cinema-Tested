import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { SeriesComponent } from './pages/series/series.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';

export const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'index', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'favoritos', component: FavoritosComponent },
];
