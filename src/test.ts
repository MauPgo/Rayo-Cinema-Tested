import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// AQUI SE IMPORTA MANUALMENTE LOS ARCHIVOS DE TEST
import './app/app.component.spec';
import './app/pages/login/login.component.spec';
import './app/pages/home/home.component.spec';
import './app/pages/principal/principal.component.spec';
import './app/pages/series/series.component.spec';
import './app/pages/peliculas/peliculas.component.spec';
import './app/pages/detalle/detalle.component.spec';
import './app/pages/favoritos/favoritos.component.spec';
