import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/index';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';


if (environment.IsProduction) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
