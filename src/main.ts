import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app/app.config';
import { serverConfig } from './app/app.config.server';

const config = mergeApplicationConfig(appConfig, serverConfig);

bootstrapApplication(AppComponent, config)
  .catch((err) => console.error(err));
